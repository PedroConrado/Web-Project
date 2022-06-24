import express from 'express'
import controller from '../controllers/users-controllers.js'

const router=express.Router();
router.get('/', controller.getUsers);
router.get('/:user', controller.getById);
router.put('/', controller.update);
router.post('/', controller.post);
router.delete('/:user', controller.delete);

export default router;