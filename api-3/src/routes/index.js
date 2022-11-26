const { Router }  = require('express');

const UserController = require('../controllers/UserController/index')
const SessionController = require('../controllers/Login/index')
const ProductController = require('../controllers/ProductController/index')
const CartController = require('../controllers/CartController/index')
const { authenticate } = require('../middlewares/index')

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Olá Mundo!')
});

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)

routes.get('/users/:user_id', UserController.getUserById)

routes.post('/sessions', SessionController.createSession)

routes.post('/products/:user_id', authenticate,ProductController.createProduct)
routes.get('/:user_id/products/',ProductController.getUserProducts)
routes.delete('/products/:user_id/:product_id',authenticate,ProductController.deleteProduct)
routes.patch('/products/:user_id/:product_id',authenticate,ProductController.updateProduct)

routes.get('/products',ProductController.getProducts)
routes.get('/products/:product_id',ProductController.getProductById)

routes.post('/carts/:user_id',authenticate,CartController.createCart)
routes.get('/carts/:user_id', authenticate,CartController.getUserCarts)
routes.get('/carts/:user_id/:cart_id',authenticate,CartController.getCart)



module.exports = routes;