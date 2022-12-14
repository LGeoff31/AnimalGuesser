import horseSounds from "../animalSounds/horse.wav";
import questionMark from "../questionMark.png";
import horse from "../animalPictures/horse.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level17 = (props) => {
  const completed = Number((17 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [horseSound, setHorseSound] = useState(null);
  useEffect(() => {
    const horseSound = new Audio(horseSounds);
    setHorseSound(horseSound);
  }, []);

  const playSound = () => {
    if (horseSound) {
      horseSound.play();
    }
  };

  const handleClickNext = () => {
    if (horseSound) {
      horseSound.pause();
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
            src={choiceChoosen ? horse : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={() => onWin(choiceChoosen)}
          >
            Horse
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Goat
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Pig
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

export default Level17;
