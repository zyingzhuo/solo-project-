
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
import { getSpots } from '../../store/spot';
import SingleSpot from '../../components/SingleSpot'
import { NavLink } from 'react-router-dom';


const AllSpots=()=>{
  
  const dispatch = useDispatch();
  const spotsArr=useSelector((state)=>Object.values(state.spot))
  
  useEffect(()=>{
      dispatch(getSpots())
  },[dispatch])
 

 
  return (
    <div>
      <h1>Welcome to all the listings</h1>
      {!spotsArr.length && <span>No listing available right now.</span>}
      <ul >
        {spotsArr.map((spot) => (
          <SingleSpot  spot={spot} />
        ))}
        </ul>
    </div>
  );
};

export default AllSpots