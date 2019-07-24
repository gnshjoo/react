import React, { Component } from "react";
import PropsTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름"
  };
  static PropsTypes = {
    name: PropsTypes.string,
    age: PropsTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <div>
        <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
        <p>저는 {this.props.age}살 입니다.</p>
        <p>아이작의 나이는 {this.state.number}살 입니다.</p>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1
            });
          }}
        >
          add
        </button>
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: "기본 이름"
// };

// MyComponent.PropsTypes = {
//   name: PropsTypes.string
// };

export default MyComponent;
