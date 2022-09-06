import pigSounds from "../animalSounds/pig.wav";
import questionMark from "../questionMark.png";
import pig from "../animalPictures/pig.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";

const Level1 = (props) => {
  const completed = Number((1 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [pigSound, setPigSound] = useState(null);

  useEffect(() => {
    const pigSound = new Audio(pigSounds);
    setPigSound(pigSound);
  }, []);

  const playSound = () => {
    if (pigSound) {
      pigSound.play();
    }
  };

  const handleClickNext = () => {
    if (pigSound) {
      pigSound.pause();
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
            src={choiceChoosen ? pig : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={() => onWin(choiceChoosen)}
          >
            Pig
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Cow
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Cat
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Dog
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

export default Level1;
