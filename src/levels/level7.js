import cricketSounds from "../animalSounds/cricket.wav";
import questionMark from "../questionMark.png";
import cricket from "../animalPictures/cricket.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level7 = (props) => {
  const completed = Number((7 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [cricketSound, setCricketSound] = useState(null);
  useEffect(() => {
    const cricketSound = new Audio(cricketSounds);
    setCricketSound(cricketSound);
  }, []);

  const playSound = () => {
    if (cricketSound) {
      cricketSound.play();
    }
  };

  const handleClickNext = () => {
    if (cricketSound) {
      cricketSound.pause();
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
            src={choiceChoosen ? cricket : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={() => onWin(choiceChoosen)}
          >
            Cricket
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Chirping birds
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Mouse
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Bat
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

export default Level7;
