// src/routes/ExampleRoutes.ts

import { Router } from 'express';
import KeonnController from '../KeonnController/controller.js';

const   router = Router();

router.get('/start', KeonnController.startKeonn);

export default router;
