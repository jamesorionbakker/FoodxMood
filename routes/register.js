import express from 'express';
import * as DB from '../db.js';
import { generate as generateAccessToken } from '../components/accessToken.js';
import { generate as generateRefreshToken } from '../components/refreshToken.js';
import bcrypt from 'bcrypt';

let router = express.Router();

const year = 1000 * 60 * 60 * 24 * 365;

router.post('/', async (req, res) => {
    try {
        let { username, password, firstName, lastName } = req.body;
        console.log(firstName)
        let hashedPassword = await bcrypt.hash(password, 10);

        let newUser = new DB.User({ username, password: hashedPassword, firstName, lastName })
        await newUser.save()
        // await DB.addUser({ username, password: hashedPassword, firstName, lastName });
        const refreshToken = generateRefreshToken({ username });
        DB.saveRefreshToken({ token: refreshToken, username });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: year,
        });
        res.json(generateAccessToken({ username, firstName, lastName }));
    } catch (error) {
        console.log(error)
        res.status(500)
    }
});

export default router;
