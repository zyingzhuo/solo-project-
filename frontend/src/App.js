import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Mainbody from "./components/Mainbody"
import SingleSpot from "./components/SingleSpot";
import AllSpots from "./components/AllSpots";
import SingleSpotPage from "./components/SingleSpotPage";

function App() {
  const dispatch = useDispatch();
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
          <Route exact path='/'></Route>

          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route  path='/spots/:spotId'>
          <SingleSpotPage/>
          </Route>
          <Route exact path='/spots'>
            <AllSpots />
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

