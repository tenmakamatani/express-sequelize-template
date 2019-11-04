'use strict';

import { Router } from 'express';
const router = Router();

import User from '../models/User';

router.get('/test', async (req, res) => {
  const users = User.findAll();
  res.send(users);
});

export default router;
