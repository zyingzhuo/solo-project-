// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import styles from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import CreateListingForm from "../CreateListingForm";
import { useBooking } from '../../context/bookContext.js'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm]=useState('')

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const {setBooking}=useBooking()
  const logout = (e) => {
    e.preventDefault();
    setBooking(false);
    dispatch(sessionActions.logout());
  };

  return (
    <>
    <div className={styles.profileButtonContainer}>
      <button onClick={openMenu} className={styles.openMenu}>
        <i className="fas fa-user" />
      </button>
      {showMenu && (
        <ul className={styles.profilelists}>
          <li style={{ listStyleType: 'none' }}>{user.username}</li>
          <li style={{ listStyleType: 'none' }}>{user.email}</li>
          <li style={{ listStyleType: 'none' }} onClick={()=>setBooking(true)}>host your place</li>
          <li style={{ listStyleType: 'none'}}>
            <button onClick={logout} >Log Out</button>
          </li>
        </ul>
      )}
      </div>
    </>
  );
}

export default ProfileButton;