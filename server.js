import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import * as DB from './db.js';
DB.connect();

import * as autocomplete from './autocomplete.js';

//Routers
import api from './routes/api.js';
import login from './routes/login.js';
import register from './routes/register.js';
import refreshAccess from './routes/refreshAccess.js';
import logout from './routes/logout.js';

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
app.use('/logout', logout);
app.use('/register', register);
app.use('/access', refreshAccess);
app.get('/mealtypes', autocomplete.mealType);
app.post('/ingredients', autocomplete.ingredient);
app.use('/api', api);
app.get('/validate/username/:username', async (req, res) => {
    try {
        console.log('validatine')
        let {username} = req.params
        let response = await DB.User.exists({username})
        res.json(!response);
    } catch (error) {
        res.sendStatus(500)
    }
});

app.listen(process.env.PORT, function () {
    console.log('listening on ' + process.env.PORT);
});
