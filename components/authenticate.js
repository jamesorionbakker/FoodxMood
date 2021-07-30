import jwt from 'jsonwebtoken';
//import * as DB from './db.js';
const year = 1000 * 60 * 60 * 24 * 365;

// export async function login(req, res) {
//     try {
//         let user = await DB.authenticate(req.body.credentials);
//         let username = { username: user.username };
//         const accessToken = generateAccessToken(username);
//         const refreshToken = generateRefreshToken(username);
//         await DB.saveRefreshToken({ token: refreshToken, username });
//         res.cookie('refreshToken', refreshToken, {
//             httpOnly: true,
//             secure: true,
//             maxAge: year,
//         });
//         res.json(accessToken);
//     } catch (error) {
//         res.status(400);
//         res.json(error.message);
//     }
// }

// export async function register(req, res) {
//     let user = await DB.addUser(req.body.credentials);
//     const accessToken = generateAccessToken({username: user.username});
//     const refreshToken = generateRefreshToken({username: user.username});
//     DB.saveRefreshToken({ token: refreshToken, username: user.username });
//     res.cookie('refreshToken', refreshToken, {
//         httpOnly: true,
//         secure: true,
//         maxAge: year,
//     });
//     res.json({ accessToken: accessToken, username: user.username });
// }

// export function accessToken(req, res, next) {
//     let accessToken = req.headers.authorization.split(' ')[1];
//     if (!accessToken) res.sendStatus(401);

//     JWT.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if(err) {
//             console.log(err)
//             return res.sendStatus(403)
//         }
//         req.authUser = user.username
//         next()
//     })

// }

// function generateAccessToken(user) {
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: '1h',
//     });
// }

// function generateRefreshToken(user) {
//     return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
//         expiresIn: '365d',
//     });
// }