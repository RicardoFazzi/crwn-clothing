import React from "react";
import "./App.css";
import HomePage from "./pages/homepages/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Route</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
