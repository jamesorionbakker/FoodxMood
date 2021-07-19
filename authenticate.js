import jwt from 'jsonwebtoken';
import * as DB from './db.js';
const year = 1000 * 60 * 60 * 24 * 365;

export async function authenticate(req, res, next) {
    try {
        let user = await DB.authenticate(req.body.credentials);
        req.authUser = { username: user.username };
        console.log('user authenticated')
        next();
    } catch (error) {
        res.status(400);
        res.json(error.message);
    }
}

export async function getAccess(req, res) {
    let refreshToken = req.cookies.refreshToken;
    try {
        if (!refreshToken) {
            throw new Error('invalid refresh token');
        }
        let validToken = await DB.validateRefreshToken(refreshToken);
        if (!validToken) {
            throw new Error('invalid refresh token');
        }
        let user = { username: validToken.username };
        let accessToken = await generateAccessToken(user);
        res.json(accessToken);
    } catch (error) {
        res.status(403);
        res.json(error.message);
    }
}

export async function login(req, res) {
    console.log('logging in');
    let user = req.authUser;
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    DB.saveRefreshToken({ token: refreshToken, username: user.username });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: year,
    });
    res.json(accessToken);
}

export async function register(req, res) {
    let user = await DB.addUser(req.body.credentials);
    console.log(user)
    const accessToken = generateAccessToken({username: user.username});
    const refreshToken = generateRefreshToken({username: user.username});
    DB.saveRefreshToken({ token: refreshToken, username: user.username });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: year,
    });
    res.json({ accessToken: accessToken, username: user.username });
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
    });
}

function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '365d',
    });
}
