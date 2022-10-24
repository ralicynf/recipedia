const Recipe = require('../models/Recipe');
const FoodType = require('../models/FoodType');


const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save()
        return res.status(201).json({
            recipe,
            });
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

const createType = async (req, res) => {

}

module.exports = {
    createRecipe
}