import catSounds from "../animalSounds/cat.wav";
import questionMark from "../questionMark.png";
import cat from "../animalPictures/cat.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level6 = (props) => {
  const completed = Number((6 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [catSound, setCatSound] = useState(null);
  useEffect(() => {
    const catSound = new Audio(catSounds);
    setCatSound(catSound);
  }, []);

  const playSound = () => {
    if (catSound) {
      catSound.play();
    }
  };

  const handleClickNext = () => {
    if (catSound) {
      catSound.pause();
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
            src={choiceChoosen ? cat : questionMark}
            alt=""
          />
        </div>

        <div className="options">
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
            Squirrel
          </button>
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={onWin}
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

export default Level6;
