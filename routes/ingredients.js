import express from 'express';
let router = express.Router();
import * as DB from '../db.js';

router.get('/', async (req, res) => {
    let filters = {};
    let response = await DB.Ingredient.find({ ...filters });
    response = response.map((ingredient) => {
        return ingredient.name;
    });
    res.json(response);
});

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        let username = req.authUser;
        let { value } = req.body;
        await DB.addIngredient({
            name: value,
            username: username,
        });
        console.log('ingredient added');
        res.sendStatus(200);
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;
