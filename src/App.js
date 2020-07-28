import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import RequestForm from './Components/RequestForm/RequestForm';
import WebApp from "./Components/WebApp/WebApp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
         <Route exact path="/Web-App-dev" component ={WebApp}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/request-a-quote" component={RequestForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
