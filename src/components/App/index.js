import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";

import "../../assets/styles/Shared.css";
import NewCar from "../NewCar";
import CarDetails from "../CarDetails";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addcar" component={NewCar} />
        <Route exact path="/:id" component={CarDetails} />
      </Switch>
    </Router>
  );
}
