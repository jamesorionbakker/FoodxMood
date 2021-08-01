import express from 'express';
let router = express.Router();
import * as accessToken from '../components/accessToken.js';
import { RefreshToken } from '../db.js';

//import routers

//define routes

router.use('/', accessToken.authenticate);

router.get('/', async (req, res) => {
    try {
        let username = req.authUser;
        let { refreshToken } = req.cookies;
        await RefreshToken.findOneAndDelete({ username, refreshToken });
        res.clearCookie('refreshToken');
        res.status(200).send()
    } catch (error) {
        res.status(500)
    }
});

export default router;
