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
import validation from './routes/validation.js'

//middleware
app.use(express.static(__dirname + '/client/build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);
app.use('/access', refreshAccess);
app.use('/api', api);
app.use('/validation', validation)


app.listen(process.env.PORT, function () {
    console.log('listening on ' + process.env.PORT);
});
