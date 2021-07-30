import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import {
    mealSchema,
    healthCheckSchema,
    ingredientSchema,
    symptomSchema,
    userDBSchema,
    refreshTokenSchema,
} from './schemas.js';

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodmooddb.gevve.mongodb.net/foodMoodDB?retryWrites=true&w=majority`;

export function connect() {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const Meal = mongoose.model('meals', mealSchema);
export const HealthCheck = mongoose.model('healthCheck', healthCheckSchema);
export const Ingredient = mongoose.model('ingredient', ingredientSchema);
export const Symptom = mongoose.model('symptom', symptomSchema);
export const User = mongoose.model('user', userDBSchema);
export const RefreshToken = mongoose.model('refreshToken', refreshTokenSchema);

export async function addMeal(meal) {
    let entry = new Meal({
        type: 'meal',
        mealType: meal.type,
        ingredients: meal.ingredients,
        fullness: meal.fullness,
        prePrepared: meal.prePrepared,
        time: meal.time,
    });
    await entry.save();
    let data = await Meal.find({});
    return data;
}
export async function addHealthCheck(healthCheck) {
    let entry = new HealthCheck({
        symptoms: healthCheck.symptoms,
        mood: healthCheck.mood,
        time: healthCheck.time,
    });
    //await connect();
    await entry.save();
    let data = await HealthCheck.find({});
    //await mongoose.connection.close();
    return data;
}

export async function addIngredient(ingredient) {
    let entry = new Ingredient({
        name: ingredient.name,
        compounds: ingredient.compounds,
        username: ingredient.username,
    });
    await entry.save();
    let data = await Ingredient.find({});
    return data;
}

export async function addSymptom(symptom) {
    let entry = new Symptom({
        description: symptom,
    });
    //await connect();
    await entry.save();
    let data = await Symptom.find({});
    //await mongoose.connection.close();
    return data;
}

export async function queryDB(collections, username, filter = {}) {
    //await connect();
    let response = [];
    for (let collection of collections) {
        let data = await collection.find({ username, ...filter });
        response.push(...data);
    }
    //await mongoose.connection.close();
    return response;
}

export async function addUser({ username, password }) {
    let user = new User({
        username,
        password,
    });
    //await connect();
    let response = await user.save();
    //await mongoose.connection.close();
    return response;
}

export async function getUser(credentials) {
    let validUser = await User.findOne({ username: credentials.username });
    if (!validUser) throw new Error('invalid username');
    return validUser;
}

export async function saveRefreshToken(data) {
    //await connect();
    let entry = new RefreshToken({
        refreshToken: data.token,
        username: data.username,
        createdBy: 'na',
    });
    let response = await entry.save();
    //await mongoose.connection.close()
    return response;
}

export async function validateRefreshToken(refreshToken) {
    //await connect();

    let exists = await RefreshToken.exists({ refreshToken });
    if (!exists) throw new Error('refresh token does not exist');
    let response = await RefreshToken.findOne({ refreshToken });
    //await mongoose.connection.close()
    return response.username;
}
