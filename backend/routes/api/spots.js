const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const {Spot,Image} = require('../../db/models');
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
  //validateCreateSpots
//to create a spots listing
router.post('/', asyncHandler(async(req,res)=>{
  console.log(555555555666666)
  const {userId,city,name,price,url}=req.body
  console.log(66666666666)
  const spot=await Spot.create({userId,city,name,price});
  const image=await Image.create({url, spotId:spot.id})
  spot.dataValues.Images=[image]

  console.log(77777777777)
    return res.json(spot)
    
}) )

router.put(
  '/:id',
  asyncHandler(async (req, res) =>{
    
    const spot=await Spot.findByPk((parseInt(req.params.id)), {
      include: {model:Image}
    });  
    

    const updatedSpot = await spot.update(req.body);
    const a=await Image.create(req.body.Images[0])
    spot.dataValues.Images=[a]
     return res.json(spot)
    })
   
);


router.get('/', asyncHandler(async function(req,res) {
  const spots=await Spot.findAll({
    include: Image
  });
  console.log(spots)
  return res.json(spots)
}))



router.get('/:id', asyncHandler(async function(req,res) {
    const spot=await Spot.findByPk((req.params.id), {
      include: {model:Image}
    });  
 
    return res.json(spot)
}))    



router.delete("/:id", asyncHandler(async function (req, res) {
  const spot=await Spot.findByPk((parseInt(req.params.id)), {
    include: {model:Image}
  });  
  spot.destroy()
  console.log('$$$$$$$$$')
  res.json(spot);
}));




module.exports = router;