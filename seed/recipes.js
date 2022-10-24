const db = require('../db')
const Recipe = require('../models/Recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const recipes = [
        { 
            name: "Test Recipe", 
            image: "https://i.imgur.com/c8D6Ash.png", 
            prepTime: "30 minutes", 
            cookTime: "60 minutes",
            ingredients: "flour",
            instructions: "do this",
            submittedBy: "Becca"
        },
        {
            name: "Test 2", 
            image: "https://i.imgur.com/ug9M6Ur.jpg", 
            prepTime: "15 minutes", 
            cookTime: "45 minutes",
            ingredients: "spinach",
            instructions: "do this stuff",
            submittedBy: "Neil Armstrong"
        }
    ]
    await Recipe.insertMany(recipes)
    console.log("Created recipes")
}

const run = async () => {
    await main()
    db.close()
}

run()