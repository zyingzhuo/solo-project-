
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
import { getSpots } from '../../store/spot';
import SingleSpot from '../../components/SingleSpot'
import { NavLink } from 'react-router-dom';
import { getBookings } from '../../store/booking';
import SingleBooking from '../SingleBooking';
import styles from './AllBookings.module.css'


const AllBookings=()=>{
  
  const dispatch = useDispatch();
  const bookingsArr=useSelector((state)=>Object.values(state.booking))
  const userId=useSelector((state)=>state.session.user?.id)
  useEffect(()=>{
      dispatch(getBookings(userId))
  },[dispatch])
 

 
  return (
    <div className={styles.AllBookingsContainer}>
      <h1 style={{textAlign:"center"}}>This is all your bookings</h1>
      {!bookingsArr.length && <span>No listing available right now.</span>}
      <ul >
        {bookingsArr.map((booking) => (
          <SingleBooking  booking={booking} key={booking.id}/>
        ))}
        </ul>
    </div>
  );
};

export default AllBookings