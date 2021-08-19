import express from 'express';
let router = express.Router();
import * as DB from '../db.js';
import meals from './meals.js';
import healthChecks from './healthChecks.js';

router.use('/meals', meals);
router.use('/health-checks', healthChecks);

router.get('/', async (req, res) => {
    try {
        let filter = JSON.parse(req.query.filter);
        let skip = req.query.skip ? parseInt(req.query.skip) : 0;
        let username = req.authUser;
        let totalEntryCount = await DB.Activity.countDocuments({ username, ...filter });
        let data = await DB.Activity.find({ username, ...filter })
            .sort({ time: 'desc' })
            .skip(skip)
            .limit(10);
        res.send({ data, totalEntryCount });
    } catch (error) {
        console.log(error);
    }
});

export default router;
