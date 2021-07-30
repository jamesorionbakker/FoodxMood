import express from 'express';
let router = express.Router();
import * as DB from '../db.js';

router.get('/', async (req, res) => {
    let filters = {};
    let response = await DB.Symptom.find({ ...filters });
    response = response.map((symptom) => {
        return symptom.description;
    });
    res.json(response);
});

router.post('/', async (req, res) => {
    try {
        let username = req.authUser;
        let { value } = req.body;
        let symptom = new DB.Symptom({
            username,
            description: value, 
        })
        await symptom.save()
        console.log('symptom added');
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;
