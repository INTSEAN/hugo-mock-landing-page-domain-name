import React from "react";
import AnimatedComponent from "./components/AnimatedComponent";
import AnimatedTitle from "./components/AnimatedTitle";
import "../styles/animations.css";

const App = () => {
  return (
    <div className="app">
      <div id="animated-title">
        <AnimatedTitle />
      </div>
      <AnimatedComponent />
    </div>
  );
};

export default App;
