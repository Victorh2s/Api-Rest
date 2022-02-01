import { Router } from 'express';
import Alunocontroller from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', Alunocontroller.index);
router.post('/', loginRequired, Alunocontroller.store);
router.get('/:id', Alunocontroller.show);
router.put('/:id', loginRequired, Alunocontroller.update);
router.delete('/:id', loginRequired, Alunocontroller.delete);

export default router;
