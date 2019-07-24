import React, { Component } from "react";
import MyComponent from "./MyComponents";
import "./App.css";

class App extends Component {
  render() {
    const text = "당신은 어썸한가요?";
    const condition = true;
    const style = {
      backgroundColor: "gray",
      border: "1px solid black",
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: "all",
      Moztransition: "all",
      msTransition: "all"
    };
    return <MyComponent name="React" age={30} />;
  }
}

export default App;
