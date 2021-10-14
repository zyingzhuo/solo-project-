
import React, { useState } from 'react';
//import * as spotsActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createBooking} from '../../store/booking'

function CreateBookingForm ({spot}) {
    const dispatch=useDispatch();
    const history=useHistory();

    const userId=useSelector(state=>state.session.user.id)
    const spotId=spot.id

    const [startDate,setStartDate]=useState(new Date());
    const [endDate, setEndDate]=useState(new Date());

    const handleSubmitBooking=async (e)=>{
        e.preventDefault();
        
        const payload={
            userId,
            spotId,
            startDate,
            endDate
        }
    

    const booking=await  dispatch(createBooking(payload));

    if(booking) {

      history.push(`/users/${userId}/bookings`)
        //blah blah , maybe a form tell that congradulations your trip 
    }
  }
    const totalPrice=(endDate-startDate)*(spot.price)

    return (
        <div  >
            <p>hello this is your bookings</p>
        <form onSubmit={handleSubmitBooking} >
          <div >
          <label>
            Start Date
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </label>
          <label>
            End Date
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          </label>
          <label>
            price per night: {spot.price}
          </label>
          <label>
           total price {totalPrice}
          </label>
            </div>
          <button type="submit" >book the trip</button>
        </form>
        </div>
      );

}

export default CreateBookingForm;