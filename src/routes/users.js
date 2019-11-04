'use strict';

import { Router } from 'express';
const router = Router();

// Import Controller
import UserController from '../controllers/UserController';

router.get('/:id([0-9]+)', UserController.getOneById);

router.put('/:id([0-9]+)', UserController.putOneById);

export default router;
