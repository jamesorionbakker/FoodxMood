import express from 'express';
let router = express.Router();
import * as DB from '../db.js';

const sortByTime = (a, b) => {
    return b.time - a.time;
};

router.use('/', async (req, res, next) => {
    next();
});

router.get('/all', async (req, res) => {
    let filters = {};
    let username = req.authUser;
    let data = [
        ...(await DB.Meal.find({ username, ...filters })),
        ...(await DB.HealthCheck.find({ username, ...filters })),
    ].sort(sortByTime);
    res.json(data);
});

router.get('/meals', async (req, res) => {
    let filters = {};
    let username = req.authUser;
    let response = await DB.Meal.find({ username, ...filters });
    response = response.sort(sortByTime);
    res.json(response);
});

router.post('/meals', async (req, res) => {
    try {
        let { ingredients, time, type: mealType } = req.body;
        let username = req.authUser;
        let linkedIngredients = [];
        for (let ingredient of ingredients) {
            let { _id: id, name } = await DB.Ingredient.findOne({
                name: ingredient,
            });
            linkedIngredients.push({ name, id });
        }
        let meal = new DB.Meal({
            ingredients: linkedIngredients,
            type: 'meal',
            mealType,
            time,
            username,
        });
        await meal.save();
        res.status(200);
        res.json({});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/meals/:_id', async (req, res) => {
    try {
        let { _id } = req.params;
        let { ingredients, time, type: mealType } = req.body;
        let username = req.authUser;
        let linkedIngredients = [];
        for (let ingredient of ingredients) {
            let { _id: id, name } = await DB.Ingredient.findOne({
                name: ingredient,
            });
            linkedIngredients.push({ name, id });
        }

        await DB.Meal.findByIdAndUpdate(_id, {
            ingredients: linkedIngredients,
            type: 'meal',
            mealType,
            time,
            username,
        });
        res.status(200);
        res.json({});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

router.delete('/meals/:_id', async (req, res) => {
    try {
        let { _id } = req.params;
        await DB.Meal.findOneAndDelete({ username: req.authUser, _id });
        res.status(200);
        res.json({});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

router.get('/health-checks', async (req, res) => {
    let filters = {};
    let username = req.authUser;
    let response = await DB.HealthCheck.find({ username, ...filters });
    response = response.sort(sortByTime);
    res.json(response);
});

router.post('/health-checks', async (req, res) => {
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

router.put('/health-checks/:_id', async (req, res) => {
    try {
        let { _id } = req.params;
        console.log(_id)
        let { symptoms, time, mood } = req.body;
        let username = req.authUser;
        let linkedSymptoms = [];
        console.log(symptoms)
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
        console.log('success')
        res.status(200);
        res.json({});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

router.delete('/health-checks/:_id', async (req, res) => {
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
