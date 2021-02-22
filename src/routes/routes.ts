import { Router, Request } from 'express';

const router: Router = Router()

import { controller } from '../controllers/controller';

router.get('/', controller.index);

export default router;

