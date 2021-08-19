import express from 'express';
let router = express.Router();
import * as DB from '../db.js';
import meals from './meals.js';
import healthChecks from './healthChecks.js';

router.use('/meals', meals);
router.use('/health-checks', healthChecks);

router.get('/', async (req, res) => {
    try {
        let filter = JSON.parse(req.query.filter)
        let username = req.authUser;
        let data = await DB.Activity.find({ username, ...filter });
        res.send(data);
    } catch (error) {
        console.log(error)
    }
});

export default router;
