import express from 'express'

import  isAuthenticated from '../middlewares/isAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controllers.js';

const router = express.Router()

router.post('/register',isAuthenticated,registerCompany)
router.get('/getcompany',isAuthenticated,getCompany)
router.get('/get/:id',isAuthenticated,getCompanyById)
router.put('/update/:id',isAuthenticated ,updateCompany)


export default router