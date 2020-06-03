import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../assets/styles/Shared.css";
import Home from "../Views/Home";
import NewCar from "../Views/NewCar";
import CarDetails from "../Views/CarDetails";

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
