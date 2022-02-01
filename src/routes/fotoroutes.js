import { Router } from 'express';

import FotoController from '../controllers/FotoController';
import LoginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', LoginRequired, FotoController.store);

export default router;
