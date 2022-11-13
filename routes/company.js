'use strict'
import express from 'express';
import companyController from '../controllers/companyController.js';

const router = express.Router();

router.post('/createCompany', companyController.save);
router.get('/returnBySize', companyController.returnBySize);
router.get('/returnByCreationDate', companyController.returnByCreationDate);
router.get('/summary', companyController.summary);

export default router;