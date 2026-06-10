import express from 'express'
import { changeJobApplicationStatus, changeJobVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { v2 as cloudinary } from 'cloudinary'

const router = express.Router()

//Register a company
router.post('/register',  (req,res,next)=>{
    console.log("Reached register route");
    next();
  },upload.single("image") ,registerCompany)

//company login
router.post('/login',loginCompany)

//get company data
router.get('/company',getCompanyData)

//post a job
router.post('/post-job',postJob)

// get applicants data of company
router.get('/applicants',getCompanyJobApplicants)

//get company job list
router.get('/list-jobs',getCompanyPostedJobs)

//change application status
router.post('/change-status',changeJobApplicationStatus)

//change applications visibility
router.post('/change-visibility',changeJobVisibility)

export default router