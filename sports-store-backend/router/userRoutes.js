import express from 'express'
import controller from '../controllers/users-controllers.js'
import auth from '../middlewares/auth.js';

const router=express.Router({mergeParams: true});
router.get('/', auth.isAdmin ,controller.getUsers);
router.get('/:user', auth.isUser ,controller.getById);

router.post('/', auth.isAdmin ,controller.post);

router.put('/:user', auth.isUser ,controller.update);

router.delete('/:user', auth.isAdmin ,controller.delete);

router.post('/login', controller.login);

export default router;