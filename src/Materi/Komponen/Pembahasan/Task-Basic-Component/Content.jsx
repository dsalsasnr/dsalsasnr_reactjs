import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Helloo!! Click this button please 🎁",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
        <button onClick={() => this.setState({ text: "Stay cheerful, wishing you a delightful day!😁" })}>⏳Let's click it ⏳</button>
      </div>
    );
  }
}
