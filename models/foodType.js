const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

const Schema = mongoose.Schema 

const FoodType = new Schema(
    {
        name: { type: String, required: true },
        recipeReference: []
    }
)

module.exports = mongoose.model('FoodType', FoodType)


//recipeReference: [ {type: Schema.Types.ObjectId, ref: 'Recipe'}]