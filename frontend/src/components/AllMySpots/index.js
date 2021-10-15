
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
import { getMySpots } from '../../store/spot';
import SingleSpot from '../../components/SingleSpot'
import { NavLink } from 'react-router-dom';
import { getBookings } from '../../store/booking';
import SingleBooking from '../SingleBooking';
//import SingleSpot from '../../components/SingleSpot';


const AllMySpots=()=>{
  
  const dispatch = useDispatch();
  const spotsArr=useSelector((state)=>Object.values(state.spot))
  const userId=useSelector((state)=>state.session.user?.id)
  useEffect(()=>{
      dispatch(getMySpots(userId))
  },[dispatch,userId])
 

 
  return (
    <div>
      <h1>This is all your listings</h1>
      {!spotsArr.length && <span>No listing available right now.</span>}
      <ul >
        {spotsArr.map((spot) => (
          <SingleSpot  spot={spot} />
        ))}
        </ul>
    </div>
  );
};

export default AllMySpots