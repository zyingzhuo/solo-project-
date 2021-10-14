const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const {Spot,Image,Booking} = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.post('/', asyncHandler(async(req,res)=>{
    const {spotId,userId,startDate,endDate}=req.body

    const booking=await Booking.create({spotId,userId,startDate,endDate})
    const spot=await Spot.findByPk(spotId)
    booking.dataValues.Spot=spot
    console.log('#######', booking)
    return res.json(booking)
}))

router.get('/:id(\\d+)', asyncHandler(async function(req,res) {
    const booking=await Booking.findByPk(parseInt(req.params.id));
    return res.json(booking)
  }))
  

router.delete('/:id(\\d+)', asyncHandler(async function(req,res) {
    const booking=await Booking.findByPk(parseInt(req.params.id))
    booking.destroy()
    res.json(booking)
}))


module.exports = router;