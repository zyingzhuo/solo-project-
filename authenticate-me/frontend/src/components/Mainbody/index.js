import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import ProfileButton from './ProfileButton';
import styles from './Mainbody.module.css';
import * as sessionActions from '../../store/session';
import CreateListingForm from '../CreateListingForm';
import { useBooking } from "../../context/bookContext"

function Mainbody(){
  
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const {booking, setBooking}=useBooking();

    let sessionspotform
    if (booking && sessionUser) {
        sessionspotform=(
            sessionspotform=(
                <CreateListingForm/>
            )
        )
    } 

    return (
        <div className={styles.createForm}>
            
           {booking && <CreateListingForm/> }   
            
        </div>
    )

}

export default Mainbody










