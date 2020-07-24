import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import MidSection from "./Components/MidSection/MidSection";
import Center from "./Components/Center/Center";
function App() {
  return (
    <div className="App">
      <Header />
      <Center>
        <Home />
        <MidSection />
      </Center>
    </div>
  );
}

export default App;
