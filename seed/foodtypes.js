const db = require('../db')
const FoodType = require('../models/FoodType')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const foodTypes = [
        { 
            name: "Breakfast", 
            recipeReference: []
        },
        {
            name: "Test Category",
            recipeReference: []
        }
    ]
    await FoodType.insertMany(foodTypes)
    console.log("Created categories")
}

const run = async () => {
    await main()
    db.close()
}

run()