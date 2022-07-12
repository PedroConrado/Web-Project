import express from 'express'
import controller from '../controllers/products-controllers.js'
import auth from '../middlewares/auth.js';

const router=express.Router({mergeParams: true});
router.get('/', auth.isLogged,controller.getProducts);
router.get('/:prod', auth.isLogged,controller.getById);

router.post('/', auth.isAdmin,controller.post);

router.put('/:prod', auth.isLogged,controller.update);

router.delete('/:prod', auth.isAdmin,controller.delete);

export default router;