import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/userContoller.js'

const router = express.Router()

//get user data
router.get('/user',getUserData)

//apply for job
router.post('/apply',applyForJob)

//get applied jobs data
router.get('/applications',getUserJobApplications)

//update user profile (resume)
router.post('/update-resume',upload.single('resume'),updateUserResume)

export default router