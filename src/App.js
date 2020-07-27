import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import RequestForm from './Components/RequestForm/RequestForm';
import MobileAppDev from './Components/MobileAppDev/MobileAppDev';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/request-a-quote" component={RequestForm} />
        <Route exact path="/mobile-app-dev" component={MobileAppDev} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
