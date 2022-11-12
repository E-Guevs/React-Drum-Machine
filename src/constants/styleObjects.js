import {
  drumPadColorOff,
  drumPadColorOn,
  drumPadTextShadowOff,
  drumPadTextShadowOn,
  drumPadBoxShadowOff,
  drumPadBoxShadowOn,
} from "./drumPadIndividualStyles";

const powerLightOff = {
    color: "#78909C",
    textShadow: "none",
  },
  powerLightOn = {
    color: "#18FFFF",
    textShadow: "0 0 0.5rem #18FFFF",
  },
  brandLightOff = {
    color: "#78909C",
    boxShadow: "0 0 0.15rem 0.03rem rgba(0, 0, 0, 0.5)",
  },
  brandLightOn = {
    color: "#00F0F0",
    textShadow: "0 0 0.2rem #00F0F0",
    boxShadow: drumPadBoxShadowOn,
  },
  displayScreenOff = {
    background:
      "linear-gradient(130deg, #13191C 0%, #13191C 50%, black 50%, black 100%)",
  },
  displayScreenOn = {
    background:
      "linear-gradient(130deg, #039BE5 0%, #039BE5 50%, #0288D1 50%, #0288D1 100%)",
  },
  volumeLightOff = {
    accentColor: "#13191C",
  },
  volumeLightOn = {
    accentColor: "#00DFDF",
  },
  drumPadOff = {
    color: drumPadColorOff,
    textShadow: drumPadTextShadowOff,
    boxShadow: drumPadBoxShadowOff,
    transition: "0.5s",
  },
  drumPadOn = {
    color: drumPadColorOn,
    textShadow: drumPadTextShadowOn,
    boxShadow: drumPadBoxShadowOn,
  };

export {
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
};
