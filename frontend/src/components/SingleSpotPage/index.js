
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
import { useBooking } from '../../context/bookContext.js'
//import styles from './LoginForm.module.css';
import { deleteSpot } from '../../store/spot';

const SingleSpotPage =() =>{
    const {setBooking}=useBooking()
    let history=useHistory()
    
    const {spotId}= useParams();
    const spot=useSelector(state=>state.spot[spotId]);
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getOneSpot(spotId))
   
    }, [dispatch, spotId])

    const handleRemoveItem = async(e) => {
       const  response=await dispatch(deleteSpot(e.target.id));
        if(response) {history.push('/spots')}
        
       };
  
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
            <button onClick={()=>setBooking(true)} >edit</button>
            <button id={spot?.id} onClick={handleRemoveItem}>delete</button>
            {/* {(spot?.Images)[0].url}  */}
            </>)}

            
        </div>
    )

}

export default SingleSpotPage