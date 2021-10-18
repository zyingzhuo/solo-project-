
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
//import styles from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';
import styles from'./SingleBooking.module.css'
const SingleBooking =({booking}) =>{
   
    
    const {spotId}= useParams();
    const spotFromSelector=useSelector(state=>state.spot[spotId]);
    const currentImage=useSelector(state=>state.booking[booking.id])
    const userId=useSelector((state)=>state.session.user.id)
    

    // useEffect(()=>{
    //     dispatch(getOneSpot(spotId))
   
    // }, [dispatch, spotId])
  //console.log(spotId)
    return (
        <div className={styles.SingleBookingContainer}>
            {/* 'hello world
            { booking&&(
                <>
            {booking?.name}
            {booking?.city}
          
            </>)} */}
            {booking&&(
            <div>
            <img src={currentImage?.Spot.Images[0].url} style={{height:"375px", width:"375px", 'borderRadius':"15px"}}/>
            <p>Your trip to {booking?.Spot.name} from {booking?.startDate} to {booking?.endDate} is booked</p>
            <NavLink to={`/bookings/${booking.id}`}>booking details</NavLink>
            
            </div>)}

            
        </div>
    )

}

export default SingleBooking