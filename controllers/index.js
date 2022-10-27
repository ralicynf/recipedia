const Recipe = require('../models/Recipe');
const FoodType = require('../models/FoodType');
const Resource = require('../models/Resource')


const createRecipe = async (req, res) => {
    console.log("hello")
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

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); 
        return res.status(200).json({recipes})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); 
        if (recipe) {
            return res.status(200).json({recipe})
        }
        return res.status(404).send('Recipe with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json(recipe)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
 
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted!")
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createType = async (req, res) => {
    try {
        const type = await new FoodType(req.body)
        await type.save()
        return res.status(201).json({
            type,
        });
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getResources = async (req, res) => {
    try {
        const resources = await Resource.find()
        return res.status(200).json({resources})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    createRecipe,
    createType,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
    getResources
}