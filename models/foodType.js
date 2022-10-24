const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const FoodType = new Schema(
    {
        name: { type: String, required: true },
        recipeReference: []
    }
)

module.exports = mongoose.model('FoodType', FoodType)