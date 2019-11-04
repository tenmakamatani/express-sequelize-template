'use strict';

import { Router } from 'express';
const router = Router();

// Import routes
import usersRouter from './users';

router.use('/users', usersRouter);

export default router;
