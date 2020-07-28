import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import RequestForm from './Components/RequestForm/RequestForm';
import MobileAppDev from './Components/MobileAppDev/MobileAppDev';
import UiDesign from './Components/UI_upperSection/UIUpperSection';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/request-a-quote" component={RequestForm} />
        <Route exact path="/mobile-app-dev" component={MobileAppDev} />
        <Route exact path="/ui-ux-design" component={UiDesign} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
