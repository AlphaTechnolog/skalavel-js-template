const {Router, controllerLoader} = require('skalavel')
const HomeController = require('./controllers/HomeController')

const router = new Router()

router.get('/', controllerLoader(HomeController, 'home'))

module.exports = router