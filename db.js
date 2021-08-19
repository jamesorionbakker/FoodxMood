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

export function connect() {
    return mongoose.connect(process.env.DB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const Meal = mongoose.model('meals', mealSchema, 'activity');
export const HealthCheck = mongoose.model('healthCheck', healthCheckSchema, 'activity');
export const Ingredient = mongoose.model('ingredient', ingredientSchema);
export const Symptom = mongoose.model('symptom', symptomSchema);
export const User = mongoose.model('user', userDBSchema);
export const RefreshToken = mongoose.model('refreshToken', refreshTokenSchema);
export const Activity = mongoose.model('activity', new mongoose.Schema({}), 'activity') //ONLY FOR QUERIES

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
    await entry.save();
    let data = await HealthCheck.find({});
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
    await entry.save();
    let data = await Symptom.find({});
    return data;
}

export async function queryDB(collections, username, filter = {}) {
    let response = [];
    for (let collection of collections) {
        let data = await collection.find({ username, ...filter });
        response.push(...data);
    }
    return response;
}

export async function getUser(credentials) {
    let validUser = await User.findOne({ username: credentials.username });
    if (!validUser) throw new Error('invalid username');
    return validUser;
}

export async function saveRefreshToken(data) {
    let entry = new RefreshToken({
        refreshToken: data.token,
        username: data.username,
        createdBy: 'na',
    });
    let response = await entry.save();
    return response;
}