import { Router } from 'express';
import usersController from '../controllers/UsersController';
import LoginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', usersController.index);
// router.get('/:id', usersController.show);

router.post('/', usersController.store);
router.put('/', LoginRequired, usersController.update);
router.delete('/', LoginRequired, usersController.delete);

export default router;

/*
index  lista todos os usuarios /GET
store cria um novo usuario /POST
delete apaga um usuario /DELETE
show mostra um usuario /GET
update atualiza um usuario /PATCH OU PUT
*/
