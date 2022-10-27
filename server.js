const express = require('express');
const cors = require('cors');
const logger = require('morgan')
const routes = require('./routes');
const db = require('./db');
const Recipe = require('./models/Recipe');

const PORT = process.env.PORT || 3001; 

const app = express();


app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/recipedia', routes);

app.get('/allrecipes', async (req, res) => {
    let recipes = await Recipe.find({})
    res.send(recipes)
})

app.post('/recipes', async (req, res) => {
    console.log('body', req.body)
    let newRecipe = await Recipe.create(req.body)
    res.send(newRecipe)
})

app.get('/recipes/:id', async (req, res) => {
    let recipe = await Recipe.findById(`${id}`)
    res.send(recipe)
}) 



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

// router.get('/', (req, res) => res.send('This is root!'))
// router.post('/recipes', controllers.createRecipe)
// router.post('/recipetypes', controllers.createType)
// router.get('/allrecipes', controllers.getAllRecipes)
// router.get('/recipes/:id', controllers.getRecipeById)
// router.put('/recipes/:id', controllers.updateRecipe)
// router.delete('/recipes/:id', controllers.deleteRecipe)
