

import React, { useState } from 'react';
//import * as spotsActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import styles from './CreateListingForm.module.css';
//import { Redirect } from 'react-router';
import {createSpot} from '../../store/spot'

function CreateListingForm() {

    const dispatch = useDispatch();
    const history=useHistory();

    const userId = useSelector(state => state.session.user.id);

    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [url, setURL]=useState('')
  

    // const reset=()=>{
    //   userId=
    //   setCity='';
    //   setName='';
    //   setPrice=0;
//      // setURL=""
// ;
//     }
    // if (sessionUser) return (
    //   <Redirect to="/" />
    // );
  
    const handleSubmit = async(e) => {

      e.preventDefault();
      const payload={
          userId,
          city,
          name,
          price,
          url
      }
    console.log(111111111)
      const spot=await dispatch(createSpot(payload));
    console.log(22222222)
      if(spot) {
        //console.log('test',spot)
        // <Redirect to='/spots' />
          //history.push(`/spots`)
          history.push(`spots/${spot.id}`)
          // reset()
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
        <label>
         Image url
          <input
            type="url"
            value={url}
            onChange={(e) => setURL(e.target.value)}
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