import goatSounds from "../animalSounds/goat.wav";
import questionMark from "../questionMark.png";
import goat from "../animalPictures/goat.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level11 = (props) => {
  const completed = Number((11 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [goatSound, setGoatSound] = useState(null);
  useEffect(() => {
    const goatSound = new Audio(goatSounds);
    setGoatSound(goatSound);
  }, []);

  const playSound = () => {
    if (goatSound) {
      goatSound.play();
    }
  };

  const handleClickNext = () => {
    if (goatSound) {
      goatSound.pause();
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
            src={choiceChoosen ? goat : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={onWin}
          >
            Goat
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Sheep
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Camel
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Horse
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

export default Level11;
