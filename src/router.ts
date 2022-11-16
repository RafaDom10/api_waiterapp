import { Router } from 'express'

import { createCategory } from './app/usecases/categories/createCategory'
import { listCategories } from './app/usecases/categories/listCategories'

export const router = Router()

router.get('/categories', listCategories)
router.post('/categories', createCategory)

router.get('/products', () => {})
router.post('/products', () => {})

router.get('/categories/:categoryId/products', () => {})

router.get('/orders', () => {})
router.post('/orders', () => {})
router.patch('/orders/:orderId', () => {})
router.delete('/orders/:orderId', () => {})
