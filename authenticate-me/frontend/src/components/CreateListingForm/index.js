

import React, { useState } from 'react';
//import * as spotsActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import styles from './CreateListingForm.module.css';

import {createSpot} from '../../store/spot'

function CreateListingForm() {
    const dispatch = useDispatch();
    const history=useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
  
    // if (sessionUser) return (
    //   <Redirect to="/" />
    // );
  
    const handleSubmit = async(e) => {
      e.preventDefault();

      const payload={
          city,
          name,
          price
      }

  const spot=await dispatch(createSpot(payload));

      if(spot) {
          history.push(`/spots/${spot.id}`)
      }
    }
    
  
    return (
      <div  >
      <form onSubmit={handleSubmit} >
        <div >
        <label>
          Enter the hosting city
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          description of your listing
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          price per night
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
          </div>
        <button type="submit" >Create your listing</button>
      </form>
      </div>
    );
  };

  
  export default CreateListingForm;