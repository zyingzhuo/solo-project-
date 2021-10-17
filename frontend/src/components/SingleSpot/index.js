
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
//import styles from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';
import styles from './SingleSpot.module.css'

const SingleSpot =({spot}) =>{
   
    
    const {spotId}= useParams();
    const spotFromSelector=useSelector(state=>state.spot[spotId]);
    const dispatch=useDispatch();

    // useEffect(()=>{
    //     dispatch(getOneSpot(spotId))
   
    // }, [dispatch, spotId])
  //console.log(spotId)
    return (
        <div className={styles.SingleSpotContainer}>
            
            { spot&&(
                <>
            
            {/* <NavLink to={`/spots/${spot.id}`}>{spot?.name}</NavLink> */}
           
            {/* //{spot?.url} */}
            <div>
                <NavLink to={`/spots/${spot.id}`}>
                <img src={(spot?.Images)[0]?.url } style={{height:"375px", width:"375px", 'borderRadius':"15px"}} />
                </NavLink>
            </div>
            <div className={styles.PriceAndCity}>
            <span className={styles.CityContainer}>
            {spot?.city}
            </span>
            <span className={styles.PriceContainer}>
            ${spot?.price}/night
            </span>
            </div>
            {/* {(spot?.Images)[0].url}  */}
            </>)}
          
            
        </div>
    )

}

export default SingleSpot