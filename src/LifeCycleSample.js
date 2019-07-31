import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState) {
      return { color: nextProps.color };
    }
    return null;
  }
  componentDidMount() {
    console.log("ComponetDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillMount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  getSnapshotBeforeUpdate(prevPros, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevPros !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevPros, prevState, snapshot) {
    console.log("componentDidUpdate", prevPros, prevState);
    if (snapshot) {
      console.log("업데이트 되기 직전 색상", snapshot);
    }
  }
  render() {
    console.log("render");
    const style = {
      color: this.props.color
    };
    return (
      <div>
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
