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
        let { password: savedPassword } = await DB.getUser(
            req.body.credentials
        );
        let valid = await bcrypt.compareSync(password, savedPassword)
        if(!valid) throw new Error('invalid password')
        const accessToken = generateAccessToken({ username });
        const refreshToken = generateRefreshToken({ username });
        await DB.saveRefreshToken({ token: refreshToken, username });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: year,
        });
        res.json(accessToken);
    } catch (error) {
        res.status(400);
        res.json(error.message);
    }
});

export default router;
