import express from 'express'

import  isAuthenticated from '../middlewares/isAuthenticated.js';
import { getAdminJob, getAllJobs, getJobById, postJobs } from '../controllers/jobs.controllers.js';

const router = express.Router()

router.post('/post',isAuthenticated,postJobs)
router.get('/gets',isAuthenticated,getAllJobs)
router.get('/get/:id',isAuthenticated,getJobById)
router.get('/getadminjob',isAuthenticated,getAdminJob)






export default router