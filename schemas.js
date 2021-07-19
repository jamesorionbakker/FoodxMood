import mongoose from 'mongoose';

export const mealSchema = new mongoose.Schema({
    ingredients: {
        type: Array,
        required: true
    },
    fullness: {
        type: String,
        required: true
    },
    prePrepared: {
        type: Boolean,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    mealType: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    }

})

const symptomSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    severity: {
        type: Number,
        required: true
    }
})

export const healthCheckSchema = new mongoose.Schema({
    symptoms: {
        type: [symptomSchema],
        required: true
    },
    mood: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

export const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    compounds: {
        type: Array,
        required: false
    },
    username: {
        type: String,
        required: true
    }
})

export const symptomDBSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
})
export const userDBSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
})

export const refreshTokenSchema = new mongoose.Schema({
    refreshToken: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true
    }
})