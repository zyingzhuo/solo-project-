

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    //并且useSelector会订阅store, 当action被dispatched的时候，会运行selector。
    //当action被dispatched的时候，useSelector()将对前一个selector结果值和当前结果值进行浅比较。如果不同，那么就会被re-render
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
  
    if (sessionUser) return (
      <Redirect to="/" />
    );
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(sessionActions.login({ credential, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
  
    return (
      <div className={styles.outsideForm} >
      <form onSubmit={handleSubmit} className={styles.LoginFormPage}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className={styles.loginContainer}>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
          </div>
        <button type="submit" className={styles.loginButton}>Log In</button>
      </form>
      </div>
    );
  }
  
  export default LoginFormPage;