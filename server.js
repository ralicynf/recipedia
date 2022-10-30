const express = require('express');
const cors = require('cors');
const logger = require('morgan')
const routes = require('./routes');
const db = require('./db');
const Recipe = require('./models/Recipe');
const Resource = require('./models/Resource');

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

app.get('/resources', async (req, res) => {
    let resources = await Resource.find({})
    res.send(resources)
})

app.put('/recipes/:id', async (req, res) => {
    console.log('updated', req.body)
    let update = await Recipe.findByIdAndUpdate(`${id}`)
    res.send(update)
})

app.delete('/recipes/:id', async (req, res) => {
    console.log('deleted recipe', req.body)
    let deleted = await Recipe.findByIdAndDelete(`${id}`)
    res.send(deleted)
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
