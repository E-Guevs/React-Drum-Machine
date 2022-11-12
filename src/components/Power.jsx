import React, { Component } from "react";

export default class Power extends Component {
  render() {
    return (
      <div id="power">
        <i
          id="power-button"
          className="fa-solid fa-power-off"
          style={this.props.powerLight}
          onPointerUp={this.props.switch}></i>
        <div>Power</div>
      </div>
    );
  }
}
