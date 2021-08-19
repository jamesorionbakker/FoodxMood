//node module imports
import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

//custom component imports
import * as DB from './db.js';

//connect to DB
DB.connect();

//route imports
import api from './routes/api.js';
import login from './routes/login.js';
import register from './routes/register.js';
import refreshAccess from './routes/refreshAccess.js';
import logout from './routes/logout.js';
import validation from './routes/validation.js';

//middleware
app.use(express.static('./client/build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);
app.use('/access', refreshAccess);
app.use('/api', api);
app.use('/validation', validation);

// app.get('/cloneMeals', async (req, res) => {
//     try {
//         let mealEntries = await DB.Meal.find({});
//         for (let entry of mealEntries) {
//             let {ingredients, type, mealType, time, username } = entry
//             let output = {ingredients, type, mealType, time, username}
//             await new DB.MealNew(output).save();
//         }
//         //console.log(mealEntries);
//         res.send('success');
//     } catch (error) {
//         res.send('fail')
//         console.log(error)
//     }
// });
// app.get('/cloneHealthChecks', async (req, res) => {
//     try {
//         let entries = await DB.HealthCheck.find({});
//         for (let entry of entries) {
//             console.log(entry)
//             let {symptoms, type, mood, time, username } = entry
//             let output = {symptoms, type, mood, time, username }
//             await new DB.HealthCheckNew(output).save();
//         }
//         //console.log(mealEntries);
//         res.send('success');
//     } catch (error) {
//         res.send('fail')
//         console.log(error)
//     }
// });
app.listen(process.env.PORT, function () {
    console.log('listening on ' + process.env.PORT);
});
