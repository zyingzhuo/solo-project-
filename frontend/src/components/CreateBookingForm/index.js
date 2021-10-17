
import React, { useState } from 'react';
//import * as spotsActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createTheBooking} from '../../store/booking'
import {useCreateBookingForm} from'../../context/createBookingContext'

function CreateBookingForm ({spot}) {
    const dispatch=useDispatch();
    const history=useHistory();

    const {createBooking, setCreateBooking}=useCreateBookingForm()

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
    

    const booking=await  dispatch(createTheBooking(payload));

    if(booking) {

      history.push(`/users/${userId}/bookings`)
        //blah blah , maybe a form tell that congradulations your trip 
    }
  }
    // const totalPrice=(endDate-startDate)*(spot.price)
    let timeDiff=endDate.getTime()-startDate.getTime();
    let daysDiff=timeDiff/(1000*60*60*24)
    const totalPrice=Math.round(daysDiff*(spot.price)).toLocaleString()

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
            price per night: ${spot.price}
          </label>
          <label style={{marginLeft:'10px'}}>
            total price: ${totalPrice}
          </label>
            </div>
          <button type="submit" >book the trip</button>
          <button onClick={()=>setCreateBooking(false)}>cancel</button>
        </form>
        </div>
      );

}

export default CreateBookingForm;