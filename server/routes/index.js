import express from 'express';
import database from './database';

const router = express.Router();

router.use('/database', database);

export default router;