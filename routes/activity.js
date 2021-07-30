import express from 'express';
let router = express.Router();
import * as DB from '../db.js';
import meals from './meals.js';
import healthChecks from './healthChecks.js';

router.use('/meals', meals);
router.use('/health-checks', healthChecks);

router.get('/all', async (req, res) => {
    let filters = {};
    let username = req.authUser;
    let data = [
        ...(await DB.Meal.find({ username, ...filters })),
        ...(await DB.HealthCheck.find({ username, ...filters })),
    ];
    res.json(data);
});

export default router;
