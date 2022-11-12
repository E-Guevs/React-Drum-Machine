import HighHatOpen from "../drum beats/High-Hat-Open.mp3";
import Ride from "../drum beats/Ride.wav";
import Crash from "../drum beats/Crash.mp3";
import HighHatClosed from "../drum beats/High-Hat-Closed.wav";
import HighTom from "../drum beats/High-Tom.mp3";
import MidTom from "../drum beats/Mid-Tom.mp3";
import Snare from "../drum beats/Snare.mp3";
import Kick from "../drum beats/Kick.mp3";
import FloorTom from "../drum beats/Floor-Tom.mp3";

const audioProps = [
  {
    buttonID: "hi-hat-open",
    display: "High Hat Open",
    audioID: "Q",
    src: HighHatOpen,
  },
  {
    buttonID: "ride",
    display: "Ride",
    audioID: "W",
    src: Ride,
  },
  {
    buttonID: "crash",
    display: "Crash",
    audioID: "E",
    src: Crash,
  },
  {
    buttonID: "hi-hat-closed",
    display: "High Hat Closed",
    audioID: "A",
    src: HighHatClosed,
  },
  {
    buttonID: "tom-high",
    display: "High Tom",
    audioID: "S",
    src: HighTom,
  },
  {
    buttonID: "tom-mid",
    display: "Mid Tom",
    audioID: "D",
    src: MidTom,
  },
  {
    buttonID: "snare",
    display: "Snare",
    audioID: "Z",
    src: Snare,
  },
  {
    buttonID: "kick",
    display: "Kick",
    audioID: "X",
    src: Kick,
  },
  {
    buttonID: "tom-low",
    display: "Floor Tom",
    audioID: "C",
    src: FloorTom,
  },
];

export { audioProps };
