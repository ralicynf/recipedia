const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))
router.post('/recipes', controllers.createRecipe)

module.exports = router;