import jwt from 'jsonwebtoken';
import * as DB from '../db.js';
import { generate as generateAccessToken } from './accessToken.js';

export function generate(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '365d',
    });
}
export async function authenticate(req, res) {
    console.log('refreshing access token')
    try {
        let refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            throw new Error('No refresh token');
        }
        let {username} = await DB.validateRefreshToken(refreshToken);
        let { firstName, lastName } = await DB.User.findOne({username})
        let accessToken = await generateAccessToken({username, firstName, lastName});
        res.json(accessToken);
    } catch (error) {
        res.status(403);
        res.json(error.message);
    }
}
