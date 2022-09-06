import donkeySounds from "../animalSounds/donkey.wav";
import questionMark from "../questionMark.png";
import donkey from "../animalPictures/donkey.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level9 = (props) => {
  const completed = Number((9 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [donkeySound, setDonkeySound] = useState(null);
  useEffect(() => {
    const donkeySound = new Audio(donkeySounds);
    setDonkeySound(donkeySound);
  }, []);

  const playSound = () => {
    if (donkeySound) {
      donkeySound.play();
    }
  };

  const handleClickNext = () => {
    if (donkeySound) {
      donkeySound.pause();
    }
    nextPage();
  };
  return (
    <div className="container-fluid">
      <div className="background">
        <div className="top-padding">
          <ProgressBar completed={completed} />
        </div>
        <h1 className="title">Guess that Animal</h1>
        <div className="introText">
          <p>Turn you volume on! 🔊</p>
        </div>
        <div className="rowAlign">
          <button className="soundButton" onClick={playSound}>
            Play
          </button>
          <img
            className="questionImage"
            src={choiceChoosen ? donkey : questionMark}
            alt=""
          />
        </div>
        <div className="options">
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Owl
          </button>
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={() => onWin(choiceChoosen)}
          >
            Donkey
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Moose
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Elk
          </button>
          {choiceChoosen === true ? (
            <button onClick={handleClickNext} className="choice next">
              Next
            </button>
          ) : null}
        </div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
    </div>
  );
};

export default Level9;
