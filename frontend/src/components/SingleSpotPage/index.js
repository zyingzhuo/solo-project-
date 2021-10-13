
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
//import styles from './LoginForm.module.css';

const SingleSpotPage =() =>{
   
    
    const {spotId}= useParams();
    const spot=useSelector(state=>state.spot[spotId]);
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getOneSpot(spotId))
   
    }, [dispatch, spotId])
  
    return (
        <div>
            'single spot page'
            { spot&&(
                <>
            {spot?.name}
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

export default SingleSpotPage