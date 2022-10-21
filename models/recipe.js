const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const Recipe = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true } ,
        prepTime: { type: String, required: true },
        cookTime: { type: String, required: true },
        ingredients: { type: String, required: true},
        instructions: { type: String, required: true},
        submittedBy: { type: String, required: true}
    }
)

module.exports = mongoose.model('Recipe', Recipe)