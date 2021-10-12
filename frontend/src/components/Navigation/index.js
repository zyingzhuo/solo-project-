import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import styles from './Navigation.module.css';
import * as sessionActions from '../../store/session';
import { useBooking } from '../../context/bookContext';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('demo@user.io');
  const [password, setPassword] = useState('password');
  
 const {setBooking}= useBooking()

  const handleClick=()=>{
    return dispatch(sessionActions.demoLogin({credential,password}))
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className={styles.session_link_wrap}><NavLink to="/login" style={{ textDecoration: 'none' }} >Log In</NavLink></div>
        <div className={styles.session_link_wrap}><NavLink to="/signup" style={{ textDecoration: 'none' }}>Sign Up</NavLink></div>
        <button className={styles.demobutton} onClick={handleClick}>Demo user</button>
      </>
    );
  }

  return (
    
    <ul>
      <li style={{listStyleType: 'none'}}>
        <div className={styles.sessionLink}>
        <div><i className="fab fa-airbnb"></i>plus</div>
        <div className={styles.session_link_wrap}><NavLink exact to="/" onClick={()=>setBooking(false)}  style={{textDecoration:'none'}}>Home</NavLink></div>
        {isLoaded && sessionLinks}
        </div>
      </li>
    </ul>
    
  );
}

export default Navigation;