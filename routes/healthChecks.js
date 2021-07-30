import express from 'express';
let router = express.Router();
import * as DB from '../db.js';


router.get('/', async (req, res) => {
    let filters = {};
    let username = req.authUser;
    let response = await DB.HealthCheck.find({ username, ...filters });
    res.json(response);
});

router.post('/', async (req, res) => {
    try {
        let username = req.authUser;
        let { symptoms, time, mood } = req.body;

        let linkedSymptoms = [];
        for (let symptom of symptoms) {
            let { _id: id, description } = await DB.Symptom.findOne({
                description: symptom,
            });
            linkedSymptoms.push({ description, id });
        }
        let healthCheck = new DB.HealthCheck({
            username,
            symptoms: linkedSymptoms,
            time,
            mood,
            type: 'healthCheck',
        });
        await healthCheck.save();
        res.status(200);
        res.json({});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/:_id', async (req, res) => {
    try {
        let { _id } = req.params;
        let { symptoms, time, mood } = req.body;
        let username = req.authUser;
        let linkedSymptoms = [];
        for (let symptom of symptoms) {
            let { _id: id, description } = await DB.Symptom.findOne({description: symptom});
            linkedSymptoms.push({ description, id });
        }

        await DB.HealthCheck.findByIdAndUpdate(_id, {
            username,
            symptoms: linkedSymptoms,
            time,
            mood,
            type: 'healthCheck',
        });
        res.status(200);
        res.json({});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

router.delete('/:_id', async (req, res) => {
    try {
        let { _id } = req.params;
        await DB.HealthCheck.findOneAndDelete({ username: req.authUser, _id });
        res.status(200);
        res.json({});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

export default router;
