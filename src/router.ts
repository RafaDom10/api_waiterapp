import path from 'node:path'
import { Router } from 'express'
import multer from 'multer'

import { createCategory } from './app/usecases/categories/createCategory'
import { listCategories } from './app/usecases/categories/listCategories'
import { listProducts } from './app/usecases/products/listProducts'
import { createProduct } from './app/usecases/products/createProduct'
import { listProductsByCategory } from './app/usecases/categories/listProductsByCategory'
import { listOrders } from './app/usecases/orders/listOrders'
import { createOrder } from './app/usecases/orders/createOrder'
import { changeOrderStatus } from './app/usecases/orders/changeOrderStatus'
import { cancelOrder } from './app/usecases/orders/cancelOrder'

export const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination (req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename (req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    }
  })
})

router.get('/categories', listCategories)
router.post('/categories', createCategory)

router.get('/products', listProducts)
router.post('/products', upload.single('image'), createProduct)

router.get('/categories/:categoryId/products', listProductsByCategory)

router.get('/orders', listOrders)
router.post('/orders', createOrder)
router.patch('/orders/:orderId', changeOrderStatus)
router.delete('/orders/:orderId', cancelOrder)
