import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import * as DB from './db.js';
DB.connect();
import { login, register, authenticate, getAccess } from './authenticate.js';
import { authorize } from './authorize.js';
import * as autocomplete from './autocomplete.js';

const week = 604800000;

app.use(express.static('./client/build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

let models = {
    meal: DB.Meal,
    healthCheck: DB.HealthCheck,
    ingredient: DB.Ingredient,
    symptom: DB.Symptom,
};

app.use('/login', authenticate);
app.post('/login', login);

app.post('/register', register);

app.get('/access', getAccess);

app.get('/mealtypes', autocomplete.mealType);

app.post('/ingredients', autocomplete.ingredient);

app.use('/ingredient', authorize);
app.post('/ingredient', (req, res) => {
    console.log(req.body);
    let username = req.authUser;
    let { ingredient } = req.body;
    DB.addIngredient({
        name: ingredient,
        username: username,
    }).then(() => {
        console.log('ingredient added')
        res.sendStatus(200);
    })
});

app.use('/activity', authorize);
app.post('/activity', (req, res) => {
    let username = req.authUser;
    let collections = req.body.collections.map((collection) => {
        return models[collection];
    });
    DB.queryDB(collections, username).then((data) => {
        res.json(data);
    });
});
// app.post('/meal', (req, res) => {
//     req.body.
// })

// DB.addMeal({
//     mealType: 'Breakfast',
//     ingredients: ['sausage', 'eggs', 'hashbrowns'],
//     time: Date.now(),
//     prePrepared: false,
//     fullness: 3,
// })

app.listen(process.env.PORT, function () {
    console.log('listening on ' + process.env.PORT);
});
