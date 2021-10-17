import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch,Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Mainbody from "./components/Mainbody"
//import SingleSpot from "./components/SingleSpot";
import AllSpots from "./components/AllSpots";
import SingleSpotPage from "./components/SingleSpotPage";
import AllBookings from "./components/AllBookings"
import SingleBookingPage from "./components/SingleBookingPage";
import AllMySpots from "./components/AllMySpots";
import LandingPage from "./components/LandingPage";
import CreateListingForm from "./components/CreateListingForm";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Mainbody />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
          {/* {sessionUser?(<AllSpots />):(<Redirect to="/login" />)} */}
          <LandingPage/>
          </Route>
          <Route path="/spots/new">
            <CreateListingForm />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route  path='/spots/:spotId'>
            {sessionUser?(<SingleSpotPage/>):(<Redirect to="/login" />)}
          
          </Route>
          
          <Route exact path='/spots'>
          {sessionUser?(<AllSpots />):(<Redirect to="/login" />)}
            
          </Route>
          <Route exact path='/users/:userId/bookings'>
          {sessionUser?(<AllBookings />):(<Redirect to="/login" />)}
            
          </Route>
          <Route exact path='/bookings/:bookingId'>
          {sessionUser?(<SingleBookingPage />):(<Redirect to="/login" />)}
            
          </Route>
          <Route exact path='/users/:userId/spots'>
          {sessionUser?(<AllMySpots/>):(<Redirect to="/login" />)}
            
          </Route>
          <Route>
            <h2>404 not found</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

