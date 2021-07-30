import express from 'express';
let router = express.Router();
import * as DB from '../db.js';

router.get('/ingredients', (req, res) => {
    res.json([])
});

router.get('/symptoms', (req, res) => {
    res.json([])
});

router.get('/symptoms/:query', async (req, res) => {
    let { query } = req.params;
    let matches = await DB.Symptom.find({ description: new RegExp(query, 'i') });
    let response = matches.map((entry) => {
        return entry.description;
    });
    console.log(response)
    res.json(response);
});

router.get('/ingredients/:query', async (req, res) => {
    let { query } = req.params;
    let matches = await DB.Ingredient.find({ name: new RegExp(query, 'i') });
    let response = matches.map((entry) => {
        return entry.name;
    });
    res.json(response);
});

router.get('/', (req, res) => {
    res.send('route template');
});

router.get('/meal-types/:query', (req, res) => {
    const options = []
    res.json(options)
})

export default router;
