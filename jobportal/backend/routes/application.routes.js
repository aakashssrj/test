import express from 'express'

import  isAuthenticated from '../middlewares/isAuthenticated.js';
import { applyJob, getAppiliedJobs, getApplicants, updateStatus } from '../controllers/appilcation.controllers.js';

const router = express.Router()

router.get('/apply/:id',isAuthenticated, applyJob)
router.get('/get',isAuthenticated,getAppiliedJobs)
router.get('/:id/applicants',isAuthenticated,getApplicants)
router.post('/status/:id/update',isAuthenticated ,updateStatus)


export default router