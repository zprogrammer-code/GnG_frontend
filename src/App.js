import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from '/home';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      < Route
      exact
      path={"/"}
      render={props => (
        <Home /> 
        )}
      />
   
      < Route
       exact 
       path={"/dashboard"}
       render={props => (
        < Dashboard /> 
        )}
      />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

