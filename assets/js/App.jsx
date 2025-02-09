import React from "react";
import AnimatedComponent from "./components/AnimatedComponent";
import "../styles/animations.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="fade-in">Welcome to My Hugo Site</h1>
      <AnimatedComponent />
    </div>
  );
};

export default App;
