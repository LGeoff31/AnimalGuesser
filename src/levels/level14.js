import roosterSounds from "../animalSounds/rooster.wav";
import questionMark from "../questionMark.png";
import rooster from "../animalPictures/rooster.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level14 = (props) => {
  const completed = Number((14 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [roosterSound, setRoosterSound] = useState(null);
  useEffect(() => {
    const roosterSound = new Audio(roosterSounds);
    setRoosterSound(roosterSound);
  }, []);

  const playSound = () => {
    if (roosterSound) {
      roosterSound.play();
    }
  };

  const handleClickNext = () => {
    if (roosterSound) {
      roosterSound.pause();
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
            src={choiceChoosen ? rooster : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Mocking Bird
          </button>
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={() => onWin(choiceChoosen)}
          >
            Rooster
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Crow
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Morning Bird
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

export default Level14;
