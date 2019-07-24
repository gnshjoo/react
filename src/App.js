import React, { Component } from "react";
import EventPractice from "./EventPractice";
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
    return <EventPractice />;
  }
}

export default App;
