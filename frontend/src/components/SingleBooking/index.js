
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
//import styles from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';

const SingleBooking =({booking}) =>{
   
    
    const {spotId}= useParams();
    const spotFromSelector=useSelector(state=>state.spot[spotId]);
    const dispatch=useDispatch();
    const userId=useSelector((state)=>state.session.user.id)
    

    // useEffect(()=>{
    //     dispatch(getOneSpot(spotId))
   
    // }, [dispatch, spotId])
  //console.log(spotId)
    return (
        <div>
            {/* 'hello world
            { booking&&(
                <>
            {booking?.name}
            {booking?.city}
          
            </>)} */}
            {booking&&(
            <>
            Your trip to {booking.Spot.name} from {booking.startDate} to {booking.endDate} is booked
            <NavLink to={`/users/${userId}/bookings/${booking.id}`}>booking details</NavLink>
            <button>delete</button>
            </>)}

            
        </div>
    )

}

export default SingleBooking