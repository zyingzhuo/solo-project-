
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


const LandingPage=()=>{
  
//   const dispatch = useDispatch();
//   const spotsArr=useSelector((state)=>Object.values(state.spot))
//   const userId=useSelector((state)=>state.session.user?.id)
//   useEffect(()=>{
//       dispatch(getMySpots(userId))
//   },[dispatch,userId])
 

 
  return (
    <div>
      {/* <h1>This is all your listings</h1>
      {!spotsArr.length && <span>No listing available right now.</span>}
      <ul >
        {spotsArr.map((spot) => (
          <SingleSpot  spot={spot} />
        ))}
        </ul> */}
          <NavLink to="/spots">explore places</NavLink>
        <img src={"https://images.unsplash.com/photo-1563732247092-b044f9e542e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80"} />
    </div>
  );
};

export default LandingPage;