import path from 'node:path'
import { Router } from 'express'
import multer from 'multer'

import { createCategory } from './app/usecases/categories/createCategory'
import { listCategories } from './app/usecases/categories/listCategories'
import { listProducts } from './app/usecases/products/listProducts'
import { createProduct } from './app/usecases/products/createProduct'
import { listProductsByCategory } from './app/usecases/categories/listProductsByCategory'

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

router.get('/orders', () => {})
router.post('/orders', () => {})
router.patch('/orders/:orderId', () => {})
router.delete('/orders/:orderId', () => {})
