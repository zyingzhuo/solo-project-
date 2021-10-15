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
router.post('/', validateCreateSpots,asyncHandler(async(req,res)=>{
  
  const {userId,city,name,price,url}=req.body
  
  const spot=await Spot.create({userId,city,name,price});
  const image=await Image.create({url, spotId:spot.id})
  spot.dataValues.Images=[image]

 
    return res.json(spot)
    
}) )

router.put(
  '/:id',
  asyncHandler(async (req, res) =>{
    
    const spot=await Spot.findByPk((parseInt(req.params.id)), {
      include: {model:Image}
    });  
    

    const updatedSpot = await spot.update(req.body);
    const imagesArr=await Image.findAll({
      where: {spotId:spot.id}
    })
    for (let imageArr of imagesArr) {
      imageArr.destroy()
    }
    
    const a=await Image.create(req.body.Images[0])
    spot.dataValues.Images=[a]
     return res.json(spot)
    })
   
);


router.get('/', asyncHandler(async function(req,res) {
  const spots=await Spot.findAll({
    include: Image
  });
  
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
  
  res.json(spot);
}));




module.exports = router;