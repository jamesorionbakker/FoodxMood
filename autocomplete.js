import * as DB from './db.js';

export async function mealType(req, res){
    const options = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Drink']
    res.json(options)
}
export async function ingredient(req, res){
    let query = req.body.query;
    let matches = await DB.Ingredient.find({name: new RegExp(query, "i")})
    let response = matches.map((entry)=>{
        return entry.name
    })
    res.json(response)
}