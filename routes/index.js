const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))
router.post('/recipes', controllers.createRecipe)
router.post('/recipetypes', controllers.createType)
router.get('/allrecipes', controllers.getAllRecipes)
router.get('/recipes/:id', controllers.getRecipeById)

module.exports = router;