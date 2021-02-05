import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignedInMain from "./SignedInDesign/MainDesign";
import Signup from "./SignUp/LandingPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignedInMain} />
        <Route exact path="/" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
