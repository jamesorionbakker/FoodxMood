import express from 'express';
import * as DB from '../db.js';
import { generate as generateAccessToken } from '../components/accessToken.js';
import { generate as generateRefreshToken } from '../components/refreshToken.js';
import bcrypt from 'bcrypt';

let router = express.Router();

const year = 1000 * 60 * 60 * 24 * 365;

router.post('/', async (req, res) => {
    try {
        let { username, password } = req.body.credentials;
        let hashedPassword = await bcrypt.hash(password, 10);
        await DB.addUser({ username, password: hashedPassword });
        const refreshToken = generateRefreshToken({ username });
        DB.saveRefreshToken({ token: refreshToken, username });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: year,
        });
        res.json(generateAccessToken({ username }));
    } catch (error) {
        res.status(500)
    }
});

export default router;
