import express from 'express'
import controller from '../controllers/users-controllers.js'

const router=express.Router();
router.post('/', controller.post);
router.get('/', controller.getUsers);
router.get('/:user', controller.getById);
router.put('/:user', controller.update);
router.delete('/:user', controller.delete);

export default router;