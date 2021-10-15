
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
//import styles from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';

const SingleSpot =({spot}) =>{
   
    
    const {spotId}= useParams();
    const spotFromSelector=useSelector(state=>state.spot[spotId]);
    const dispatch=useDispatch();

    // useEffect(()=>{
    //     dispatch(getOneSpot(spotId))
   
    // }, [dispatch, spotId])
  //console.log(spotId)
    return (
        <div>
            'hello world
            { spot&&(
                <>
            <NavLink to={`/spots/${spot.id}`}>{spot?.name}</NavLink>
            {spot?.price}
            {spot?.city}
            {/* //{spot?.url} */}
            <div>
                <img src={(spot?.Images)[0]?.url} />
            </div>
            {/* {(spot?.Images)[0].url}  */}
            </>)}

            
        </div>
    )

}

export default SingleSpot