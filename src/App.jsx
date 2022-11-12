import React, { Component } from "react";

import {
  drumPadColorOff,
  drumPadColorOn,
  drumPadColorActive,
  drumPadTextShadowOff,
  drumPadTextShadowOn,
  drumPadTextShadowActive,
  drumPadBoxShadowOff,
  drumPadBoxShadowOn,
  drumPadBoxShadowActive,
} from "./constants/drumPadIndividualStyles";

import {
  powerLightOff,
  powerLightOn,
  brandLightOff,
  brandLightOn,
  displayScreenOff,
  displayScreenOn,
  volumeLightOff,
  volumeLightOn,
  drumPadOff,
  drumPadOn,
} from "./constants/styleObjects";

import { audioProps } from "./constants/drumPadPropertyObjectsArray";
import DrumPad from "./components/DrumPad";
import Power from "./components/Power";
import Display from "./components/Display";
import Volume from "./components/Volume";

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOn: false,
      powerLight: powerLightOff,
      brandLight: brandLightOff,
      displayScreen: displayScreenOff,
      volumeLight: volumeLightOff,
      display: "",
    };
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.handlePointerPress = this.handlePointerPress.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSoundWithPointer = this.playSoundWithPointer.bind(this);
    this.playSoundWithKeyboard = this.playSoundWithKeyboard.bind(this);
    this.handleDrumPadHover = this.handleDrumPadHover.bind(this);
    this.handleVolumeRelease = this.handleVolumeRelease.bind(this);
  }

  componentDidMount() {
    let initialTouchY;
    const drumPads = document.getElementsByClassName("drum-pad");
    function preventDefaultTouchAction(event) {
      if (event.target.getAttribute("id") !== "volume-slider")
        event.preventDefault();
    }

    document.addEventListener(
      "touchstart",
      (event) => {
        if (event.target.getAttribute("id") !== "volume-slider") {
          event.preventDefault();
          initialTouchY = event.changedTouches[0].clientY;
        }
      },
      { passive: false }
    );

    document.addEventListener(
      "touchmove",
      (event) => {
        let updatedTouchY = event.changedTouches[0].clientY;
        let scrollDistance = initialTouchY - updatedTouchY;
        window.scrollBy(0, scrollDistance);
        initialTouchY = updatedTouchY;
      },
      { passive: false }
    );

    for (let drumPad of drumPads)
      drumPad.addEventListener("pointerdown", this.handlePointerPress);
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("touchstart", preventDefaultTouchAction, {
      passive: false,
    });
  }

  handlePointerPress(event) {
    event.target.style.color =
      this.state.powerOn === true ? drumPadColorActive : drumPadColorOff;
    event.target.style.textShadow =
      this.state.powerOn === true
        ? drumPadTextShadowActive
        : drumPadTextShadowOff;
    event.target.style.boxShadow =
      this.state.powerOn === true
        ? drumPadBoxShadowActive
        : drumPadBoxShadowOff;
    event.target.style.transition = "none";

    setTimeout(() => {
      event.target.style.color =
        this.state.powerOn === true ? drumPadColorOn : drumPadColorOff;
      event.target.style.textShadow =
        this.state.powerOn === true
          ? drumPadTextShadowOn
          : drumPadTextShadowOff;
      event.target.style.boxShadow =
        this.state.powerOn === true ? drumPadBoxShadowOn : drumPadBoxShadowOff;
    }, 100);
  }

  handleKeyPress(event) {
    const elements = document.querySelectorAll("*");
    for (let element of elements) element.blur();

    if (event.key === "Tab") event.preventDefault();
    if (/^[qweasdzxc]$/i.test(event.key)) {
      let drumPad = document.querySelector(
        `button[hotkey="${event.key.toUpperCase()}"]`
      );
      event.preventDefault();
      this.playSoundWithKeyboard(event);
      drumPad.style.color =
        this.state.powerOn === true ? drumPadColorActive : drumPadColorOff;
      drumPad.style.textShadow =
        this.state.powerOn === true
          ? drumPadTextShadowActive
          : drumPadTextShadowOff;
      drumPad.style.boxShadow =
        this.state.powerOn === true
          ? drumPadBoxShadowActive
          : drumPadBoxShadowOff;
      drumPad.style.transition = "none";

      setTimeout(() => {
        drumPad.style.color =
          this.state.powerOn === true ? drumPadColorOn : drumPadColorOff;
        drumPad.style.textShadow =
          this.state.powerOn === true
            ? drumPadTextShadowOn
            : drumPadTextShadowOff;
        drumPad.style.boxShadow =
          this.state.powerOn === true
            ? drumPadBoxShadowOn
            : drumPadBoxShadowOff;
      }, 100);
    }
  }

  toggleSwitch(event) {
    let clips = document.getElementsByClassName("clip");
    for (let clip of clips) clip.pause();

    this.setState({
      powerOn: !this.state.powerOn,
      powerLight: !this.state.powerOn ? powerLightOn : powerLightOff,
      brandLight: !this.state.powerOn ? brandLightOn : brandLightOff,
      displayScreen: !this.state.powerOn ? displayScreenOn : displayScreenOff,
      volumeLight: !this.state.powerOn ? volumeLightOn : volumeLightOff,
      display: !this.state.powerOn ? "Hello!" : "",
    });
  }

  playSoundWithPointer(event) {
    let clip = document.getElementById(event.target.innerText);
    clip.currentTime = 0;
    clip.volume =
      this.state.powerOn === true
        ? document.getElementById("volume-slider").value / 100
        : 0;
    clip.play();

    if (this.state.powerOn === false) return this.state;
    this.setState({
      display: event.target.getAttribute("display"),
    });
  }

  playSoundWithKeyboard(event) {
    let clip = document.getElementById(event.key.toUpperCase());
    clip.currentTime = 0;
    clip.volume =
      this.state.powerOn === true
        ? document.getElementById("volume-slider").value / 100
        : 0;
    clip.play();

    if (this.state.powerOn === false) return this.state;
    this.setState({
      display: document
        .querySelector(`button[hotkey="${event.key.toUpperCase()}"]`)
        .getAttribute("display"),
    });
  }

  handleDrumPadHover(event) {
    event.target.style.cursor =
      this.state.powerOn === true ? "pointer" : "initial";
  }

  handleVolumeRelease(event) {
    event.target.style.accentColor =
      this.state.powerOn === true ? volumeLightOn : volumeLightOff;
  }

  render() {
    let drumPad;

    if (this.state.powerOn === true) {
      drumPad = audioProps.map((audioObj, i, audioArr) => {
        return (
          <DrumPad
            key={audioArr[i].buttonID}
            buttonId={audioArr[i].buttonID}
            display={audioArr[i].display}
            audioId={audioArr[i].audioID}
            backlight={this.state.drumPadLight}
            src={audioArr[i].src}
            style={drumPadOn}
            playSound={this.playSoundWithPointer}
            hover={this.handleDrumPadHover}
          />
        );
      });
    } else {
      drumPad = audioProps.map((audioObj, i, audioArr) => {
        return (
          <DrumPad
            key={audioArr[i].buttonID}
            buttonId={audioArr[i].buttonID}
            display={audioArr[i].display}
            audioId={audioArr[i].audioID}
            backlight={this.state.drumPadLight}
            src={audioArr[i].src}
            style={drumPadOff}
            playSound={this.playSoundWithPointer}
            hover={this.handleDrumPadHover}
          />
        );
      });
    }

    return (
      <div id="drum-machine">
        <h1 style={this.state.brandLight}>Drum Beats</h1>
        <div id="drum-pad-set">{drumPad}</div>
        <div id="controls">
          <Power
            powerLight={this.state.powerLight}
            switch={this.toggleSwitch}
          />
          <Display
            display={this.state.display}
            displayLight={this.state.displayScreen}
          />
          <Volume
            volumeLight={this.state.volumeLight}
            volumeRelease={this.handleVolumeRelease}
          />
        </div>
      </div>
    );
  }
}
