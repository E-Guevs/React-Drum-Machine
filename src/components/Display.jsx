import React, { Component } from "react";

export default class Display extends Component {
  render() {
    return (
      <div id="display" style={this.props.displayLight}>
        {this.props.display}
      </div>
    );
  }
}
