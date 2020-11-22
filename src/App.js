import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";

export default function App() {
  return (
    <Router>
      <Route exact path = "/browse">
        <Browse></Browse>
      </Route>
      <Route exact path = "/signin">
        <Signin></Signin>
      </Route>
      <Route exact path = "/signup">
        <Signup></Signup>
      </Route>
      <Route exact path = {ROUTES.HOME}>
        <Home></Home>
      </Route>
      
    </Router>
  );
}


