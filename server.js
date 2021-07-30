import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import * as DB from './db.js';
DB.connect();
// import { register, authenticate, getAccess } from './authenticate.js';
// import { authorize } from './authorize.js';
import * as autocomplete from './autocomplete.js';

//Routers
import api from './routes/api.js'
import login from './routes/login.js'
import register from './routes/register.js'
import refreshAccess from './routes/refreshAccess.js'


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

app.use('/login', login);
app.use('/register', register);
app.use('/access', refreshAccess);
app.get('/mealtypes', autocomplete.mealType);
app.post('/ingredients', autocomplete.ingredient);
app.use('/api', api)

// app.use('/ingredient', authorize);
// app.post('/ingredient', (req, res) => {
//     console.log(req.body);
//     let username = req.authUser;
//     let { ingredient } = req.body;
//     DB.addIngredient({
//         name: ingredient,
//         username: username,
//     })
//         .then(() => {
//             console.log('ingredient added');
//             res.sendStatus(200);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.sendStatus(500);
//         });
// });

// app.use('/meal', authorize);
// app.post('/meal', async (req, res) => {
//     try {
//         async function getIngredientId(ingredient) {
//             let query = await DB.Ingredient.findOne({ name: ingredient });
//             return query._id;
//         }

//         let { ingredients, time, type } = req.body;
//         let username = req.authUser;
//         let linkedIngredients = [];
//         for (let name of ingredients) {
//             let id = await getIngredientId(name);
//             linkedIngredients.push({ name, id });
//         }
//         let meal = new DB.Meal({
//             ingredients: linkedIngredients,
//             type,
//             time,
//             username,
//         });
//         await meal.save();
//         res.sendStatus(200);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });

// app.use('/activity', authorize);
// app.post('/activity', (req, res) => {
//     console.log('sending activity');
//     let username = req.authUser;
//     let collections = req.body.collections.map((collection) => {
//         return models[collection];
//     });
//     DB.queryDB(collections, username).then((data) => {
//         res.json(data);
//     });
// });


app.listen(process.env.PORT, function () {
    console.log('listening on ' + process.env.PORT);
});
