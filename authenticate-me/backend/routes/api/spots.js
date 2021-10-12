const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const {Spot} = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


const validateCreateSpots = [
    check('city')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid city.'),
    check('name')
      .exists({ checkFalsy: true })
      .isLength({ min: 10 })
      .withMessage('Please provide a listing name with at least 10 characters.'),
    check('price')
      .exists({ checkFalsy: true })
      .withMessage('Please provide price detail.'),
    handleValidationErrors,
  ];

//to create a spots listing
router.post('/', validateCreateSpots,asyncHandler(async(req,res)=>{
    const spot=await Spot.create(req.body);
    res.json(spot)
}) )




module.exports = router;