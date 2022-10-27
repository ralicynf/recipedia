const db = require('../db')
const Resource = require('../models/Resource')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const resources = [
        {
            name: "Al dente",
            definition: "Al dente is a term used to describe cooking pasta. It means pasta that is cooked until just firm. "
        },
        {
            name: "Baking",
            definition: "Baking is a type of cooking that typically uses an oven to evenly heat the item being cooked. The air around the item in the oven is heated and moves around, cooking the food. Baking is the slowest type of dry heat cooking. This method is used for cooking anything from meat to vegetables to baked goods."
        },
        {
            name: "Basting",
            definition: "Basting is a method in which a liquid is continuously applied to an item being cooked to prevent it from drying out. It also often adds flavor by utilizing liquids such as garlic butter or broth."
        }, 
        {
            name: "Blanching",
            definition: "Blanching is a method in which food is briefly cooked in boiling water. This allows flavor and color to be sealed in. Most often used for vegetables or fruits and is a good method to use to remove skin from tomatoes."
        },
        {
            name: "Boiling",
            definition: "Boiling means to cook in bubbling water that has reached 212 degrees Fahrenheit. A rolling boil is when the bubbles have actively reached the surface of the water. "
        },
        {
            name: "Broiling",
            definition: "Broiling is similar to grilling, but uses heat from above as opposed to heat from below. This method cooks very quickly, as the food is exposed to extreme high heats. This is an excellent way to toast bread or to use at the end of cooking large cuts of meat to get a crisp to the outer layer (such as with a whole turkey or chicken)."
        },
        {
            name: "Carmelize",
            definition: "Carmelization is a method of heating sugar until it liquifies and changes color and texture. Once heated, it becomes a syrup and will range in color from a light golden to dark brown depending on how long it is cooked. You can also carmelize certain vegetables and fruits due to their sugar content. For example, armelizing onions is quite common."
        },
        {
            name: "Cut in",
            definition: "Cutting in is a method of combining a solid fat into a mixture of flour by using a cutting motion. This is done using a pastry blender typically, but may be done with two knives used like scissors. This is used often in baking to combine flour with cold butter or another solid fat."
        },
        {
            name: "Deep-fry",
            definition: "Deep frying is done by completely submersing the food into hot oil or fat."
        },
        {
            name: "Deglaze",
            definition: "To deglaze a pan means to remove the browned bits from the bottom by adding a liquid while stirring and scraping the pan. Deglazing can be done with any liquid such as water, broth, tomato sauce, or even wine."
        },
        {
            name: "Flambé",
            definition: "Flambé is a method of cooking in which a liqour is drizzled over a food while cooking and then once warmed, the alcohol is ignited with a lighter just prior to serving."
        },
        {
            name: "Fold",
            definition: "Folding is commonly used in baking to incorporate lighter ingredients with a heavier mixture by using a gentle over-under motion, most often with a large spatula. By doing this, it helps to prevent the mixture from falling flat."
        },
        {
            name: "Grilling",
            definition: "Grilling is a type of cooking that uses heat from underneath the food. There are several different methods. A charcoal grill can be used in order to provide the food with a hint of smokiness. Grilling also allows for a char or crust to the items being cooked."
        },
        {
            name: "Julienne",
            definition: "Julienne is when you cut food, often vegetables, into very thin strips. "
        },
        {
            name: "Macerate",
            definition: "Maceration is soaking food in a flavored liquid prior to cooking. THis is most often done with fruit."
        },
        {
            name: "Marinate",
            definition: "Marinating is another method of soaking food into a flavored liquid in order to infuse the food with more flavor. This method typically refers to meat, poulty, or fish, though can be applied to some vegetables as well."
        },
        {
            name: "Poaching",
            definition: "Poaching is a cooking method that involves heating food by submerging it in a liquid. The liquid could be water, milk, stock, or wine. Poaching uses a lower temperature of about 158-176 degrees Fahrenheit. This is most commonly used to poach eggs using water, but is also common in poaching fruit in wine as a dessert."
        },
        {
            name: "Purée",
            definition: "Purée is the method of mashing or blending food until it is completely smooth. This is most often done in a food processor, blender, or sieve."
        },
        {
            name: "Reduce",
            definition: "Reducing is the action of allowing a liquid that it being cooked to thicken in order to concentrate its flavor by boiling. This is a precursor to making many sauces and gravies."
        },
        {
            name: "Roasting",
            definition: "Roasting is typically done in an oven in which the heat circulates around the food to evenly cook it. At the beginning, the food will be seared at a high temperature to form a crust and then it will be cooked on low heat for a long period of time. This is the best method for cooking meat that is very tender and moist."
        },
        {
            name: "Sautéing",
            definition: "Sautéing is a type of frying that uses only a small amount of oil and high heat to cook. This method is used for stir-frying. This is an excellent cooking method, as it is quick, but as there is little oil or liquid in the pan on high heat, the food needs to be monitored closely and stirred frequently."
        },
        {
            name: "Searing",
            definition: "Searing is a way to brown the outer layer of meat or fish quickly and create a crust. The food is placed into a hot skillet, under broiler, or inside an oven on high heat. By searing the outer layer of the meat, it keeps the meat moist and tender on the inside as it then cooks for a longer time on low heat. "
        },
        {
            name: "Simmer",
            definition: "Simmering is the action of cooking in liquid that is just below the boiling point. Simmering will be seen as bubbles forming from below but not bursting on the surface."
        },
        {
            name: "Skim",
            definition: "Skimming refers to the action of removing the surface foam or fat from the top of a liquid."
        },
        {
            name: "Steam",
            definition: "Steaming is to cook food on a rack or steamer set above boiling water in a covered pan."
        },
        {
            name: "Truss",
            definition: "Truss refers to the action of tying whole poultry with strings so that it holds shape when it cooks. A good example is tying the legs on a turkey while it is cooking. This also prevents any items inside the cavity used for flavoring, such as lemon, herbs, or garlic, from escaping during cooking."
        },
        {
            name: "Whip",
            definition: "Whipping refers to the action of beating food with a whisk or mixer to incorporate air into the food. The most common example of this is whipping heavy cream with a slight amount of powdered sugar in order to create a light and fluffy whipper cream topping."
        },
        {
            name: "Zest",
            definition: "Zesting is done by using a grater or zester to remove bits of the outer peel of citrus fuits."
        }
    ]
    await Resource.insertMany(resources)
}
const run = async () => {
    await main()
    db.close()
}

run()