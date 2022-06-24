import express from 'express'
import controller from '../controllers/products-controllers.js'

const router=express.Router();
router.post('/', controller.post);
router.get('/', controller.getProducts);
router.get('/:prod', controller.getById);
router.put('/:prod', controller.update);
router.delete('/:prod', controller.delete);

export default router;