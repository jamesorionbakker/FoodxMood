import express from 'express';
import * as DB from '../db.js'
import { generate as generateAccessToken } from '../components/accessToken.js'

let router = express.Router();

router.get('/', async (req, res) => {
    try {
        let refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            throw new Error('No refresh token');
        }
        let isValidRefreshToken = await DB.RefreshToken.exists({ refreshToken })
        if (!isValidRefreshToken) {
            throw new Error('Refresh token is invalid');
        }
        let { username } = await DB.RefreshToken.findOne({ refreshToken });
        let { firstName, lastName } = await DB.User.findOne({ username });
        let accessToken = await generateAccessToken({ username, firstName, lastName });
        res.json(accessToken);
    } catch (error) {
        res.status(403);
        res.json(error.message);
    }
});

export default router;
