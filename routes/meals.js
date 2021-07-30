import express from 'express';
let router = express.Router();
import * as DB from '../db.js';

router.get('/', async (req, res) => {
    let filters = {};
    let username = req.authUser;
    let response = await DB.Meal.find({ username, ...filters });
    res.json(response);
});

router.post('/', async (req, res) => {
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

router.put('/:_id', async (req, res) => {
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

router.delete('/:_id', async (req, res) => {
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


export default router;
