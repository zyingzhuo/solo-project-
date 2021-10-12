const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const bookingsRouter=require('./bookings.js')
const spotsRouter=require('./spots.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

//router.use('/bookings',bookingsRouter);

router.use('/spots', spotsRouter)










module.exports = router;





