import pugSounds from "../animalSounds/pug.wav";
import questionMark from "../questionMark.png";
import pug from "../animalPictures/pug.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level18 = (props) => {
  const completed = Number((18 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [pugSound, setPugSound] = useState(null);
  useEffect(() => {
    const pugSound = new Audio(pugSounds);
    setPugSound(pugSound);
  }, []);

  const playSound = () => {
    if (pugSound) {
      pugSound.play();
    }
  };

  const handleClickNext = () => {
    if (pugSound) {
      pugSound.pause();
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
            src={choiceChoosen ? pug : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Husky
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Bulldog
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Poodle
          </button>
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={() => onWin(choiceChoosen)}
          >
            Pug
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

export default Level18;
