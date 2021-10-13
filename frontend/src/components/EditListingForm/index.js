

import React, { useState } from 'react';
//import * as spotsActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
//import styles from './CreateListingForm.module.css';
//import { Redirect } from 'react-router';
import {createSpot} from '../../store/spot'
import {updateSpot} from'../../store/spot'
import { useEditForm } from '../../context/editSpotContext';

function EditListingForm({spotId}) {
    const  {editForm, setEditForm}=useEditForm();

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
          id:spotId,
          userId,
          city,
          name,
          price,
          Images:[{spotId,url}]
      }
    
      const updatedSpot=await dispatch(updateSpot(payload));

   
      if(updatedSpot) {
        //console.log('test',spot)
        // <Redirect to='/spots' />
          //history.push(`/spots`)
          setEditForm(false)
          history.push(`/spots/${updatedSpot.id}`)
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
        <button  type="submit" >update your listing</button>
      </form>
      </div>
    );
  };

  
  export default EditListingForm;