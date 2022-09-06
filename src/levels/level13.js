import rattlesnakeSounds from "../animalSounds/rattlesnake.wav";
import questionMark from "../questionMark.png";
import rattlesnake from "../animalPictures/rattlesnake.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level13 = (props) => {
  const completed = Number((13 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [rattlesnakeSound, setRattlesnakeSound] = useState(null);
  useEffect(() => {
    const rattlesnakeSound = new Audio(rattlesnakeSounds);
    setRattlesnakeSound(rattlesnakeSound);
  }, []);

  const playSound = () => {
    if (rattlesnakeSound) {
      rattlesnakeSound.play();
    }
  };

  const handleClickNext = () => {
    if (rattlesnakeSound) {
      rattlesnakeSound.pause();
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
            src={choiceChoosen ? rattlesnake : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Lizard
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Chameleon
          </button>
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={() => onWin(choiceChoosen)}
          >
            Rattlesnake
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Tarantula
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

export default Level13;
