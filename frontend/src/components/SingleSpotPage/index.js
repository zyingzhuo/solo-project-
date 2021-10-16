
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot, updateSpot } from '../../store/spot';
import { useBooking } from '../../context/bookContext.js'
//import styles from './LoginForm.module.css';
import { deleteSpot } from '../../store/spot';
import EditListingForm from '../EditListingForm';
import { useEditForm } from '../../context/editSpotContext';
import { useCreateBookingForm } from '../../context/createBookingContext';
import CreateBookingForm from'../CreateBookingForm'

const SingleSpotPage =() =>{
    
    const {editForm, setEditForm}=useEditForm();

    const {setBooking}=useBooking()
    const {createBooking, setCreateBooking}=useCreateBookingForm()
    let history=useHistory()
    
    const {spotId}= useParams();
    const spot=useSelector(state=>state.spot[spotId]);
    const userIdFromSession=useSelector(state=>state.session.user.id)
    const userIdFromSpot=spot?.userId
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getOneSpot(spotId))
   
    }, [dispatch, spotId])

    const handleRemoveItem = async(e) => {
       const  response=await dispatch(deleteSpot(e.target.id));
        if(response) {history.push(`/users/${userIdFromSession}/spots`)}
        
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
            {userIdFromSession===userIdFromSpot && <div>
            <button onClick={()=>setEditForm(true)} >edit</button>
            <button id={spot?.id} onClick={handleRemoveItem}>delete</button></div>}
            <button onClick={()=>setCreateBooking(true)}>create booking</button>
            {editForm && (
                <EditListingForm spotId={spot.id}/>
            )}
            {createBooking&& (
                <CreateBookingForm spot={spot}/>
            )

            }
            </>)}

            
        </div>
    )

}

export default SingleSpotPage