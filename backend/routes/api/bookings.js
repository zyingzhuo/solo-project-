const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const {Spot,Image,Booking} = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.post('/', asyncHandler(async(req,res)=>{
    const {spotId,userId,startDate,endDate}=req.body

    const booking=await Booking.create({spotId,userId,startDate,endDate})
    return res.json(booking)
}))



module.exports = router;