const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Booking,Spot, Image } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];


router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );

  router.get('/:id(\\d+)/bookings', asyncHandler(async function(req,res) {
    const bookings=await Booking.findAll({
        where: {userId:parseInt(req.params.id)},
        include:[
          {
              model:Spot,
              include: [Image]
          }
          
      ]
    })
    
    return res.json(bookings)
}))

router.get('/:id(\\d+)/spots', asyncHandler(async function(req,res) {
  const spots=await Spot.findAll({
    where:{userId: parseInt(req.params.id)},
    include: Image
  })
  return res.json(spots)
}))


// router.get('/:id(\\d+)/bookings/:id')



  module.exports = router;














module.exports = router;