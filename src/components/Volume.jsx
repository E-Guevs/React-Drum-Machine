import React, { Component } from "react";

export default class Volume extends Component {
  render() {
    return (
      <div id="volume">
        <input
          id="volume-slider"
          type="range"
          style={this.props.volumeLight}
          min="0"
          max="100"
          step="1"
          defaultValue="60"
          onPointerUp={this.props.volumeRelease}
        />
        <div>Volume</div>
      </div>
    );
  }
}
