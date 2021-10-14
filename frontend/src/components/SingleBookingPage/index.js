
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams,useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
//import styles from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';
import {getBookings, getOneBooking,deleteBooking} from '../../store/booking'

const SingleBookingPage =() =>{
   
    
    const {bookingId}= useParams();
    let history=useHistory()
    const booking=useSelector(state=>state.booking[bookingId]);
    const dispatch=useDispatch();
    const userId=useSelector((state)=>state.session.user.id)
    const [currentBooking, setCurrentBooking]= useState()

    useEffect(()=>{
        dispatch(getBookings(userId))
   
    }, [dispatch])

    const handleDeleteBooking=async(e)=>{
        const response=await dispatch(deleteBooking(e.target.id));
        if(response) {history.push(`/users/${userId}/bookings`)}
    }
  

    return (
        <div>
            hello
            {/* 'hello world
            { booking&&(
                <>
            {booking?.name}
            {booking?.city}
          
            </>)} */}
            {booking&&(
            <div>
            <p>Your trip to {booking?.Spot?.name} from {booking?.startDate} to {booking?.endDate} is booked</p>
            
            <button id={booking?.id} onClick={handleDeleteBooking}>delete</button>
            </div>)}

            
        </div>
    )

}

export default SingleBookingPage