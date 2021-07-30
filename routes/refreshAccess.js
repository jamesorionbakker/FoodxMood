import express from 'express';
import * as refreshToken from '../components/refreshToken.js'
let router = express.Router();

router.get('/', refreshToken.authenticate)

export default router