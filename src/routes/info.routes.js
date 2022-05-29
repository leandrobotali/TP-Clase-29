import express from 'express';
const router = express.Router();

import getInfo from '../controllers/info.controllers.js'


router.get('/', getInfo);


export default router;