
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getOneSpot } from '../../store/spot';
import { getMySpots } from '../../store/spot';
import SingleSpot from '../../components/SingleSpot'
import { NavLink } from 'react-router-dom';
import { getBookings } from '../../store/booking';
import SingleBooking from '../SingleBooking';
import styles from './LandingPage.module.css'


const LandingPage=()=>{
  
//   const dispatch = useDispatch();
//   const spotsArr=useSelector((state)=>Object.values(state.spot))
//   const userId=useSelector((state)=>state.session.user?.id)
//   useEffect(()=>{
//       dispatch(getMySpots(userId))
//   },[dispatch,userId])

const images=[
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1746&q=80",
    "https://images.unsplash.com/photo-1617836976766-16b8d2ae0733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1469796466635-455ede028aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
]

const [currentIndex,setCurrentIndex]=useState(0);

useEffect(()=>{
    const timeToChangeImage=setTimeout(()=>{
        if(currentIndex === images.length -1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex+1)
        }
    }, 5000)

    return ()=>{clearTimeout(timeToChangeImage)}
}, [currentIndex,images.length])

 
  return (
    <div className={styles.landingPageBody}>
      {/* <h1>This is all your listings</h1>
      {!spotsArr.length && <span>No listing available right now.</span>}
      <ul >
        {spotsArr.map((spot) => (
          <SingleSpot  spot={spot} />
        ))}
        </ul> */}
        <div className={styles.changingImagesBody} style={{backgroundImage: 'url('+images[currentIndex]+')'}}>
          <div className={styles.wordsContainer}><a className={styles.centerWords}href="/spots"> explore places</a></div>
          </div>
    </div>
  );
};

export default LandingPage;