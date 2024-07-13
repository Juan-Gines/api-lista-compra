import express from 'express'
import productController from '../controllers/productController.js'

const router = express.Router()

router.get('/categories/:category', productController.getAllProductsByCategory)

router.get('/products/:id', productController.getProductById)

export default router
