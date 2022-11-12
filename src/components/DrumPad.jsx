import React, { Component } from "react";

export default class DrumPad extends Component {
  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.buttonId}
        display={this.props.display}
        hotkey={this.props.audioId}
        style={this.props.style}
        onMouseDown={this.props.playSound}
        onPointerDown={this.props.playSound}
        onMouseOver={this.props.hover}>
        <audio
          className="clip"
          id={this.props.audioId}
          src={this.props.src}
          preload="auto"
          type="audio/mp3"></audio>
        {this.props.audioId}
      </button>
    );
  }
}
