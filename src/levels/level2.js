import hippoSounds from "../animalSounds/hippo.mp3";
import questionMark from "../questionMark.png";
import hippo from "../animalPictures/hippo.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level2 = (props) => {
  const completed = Number((2 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [hippoSound, setHippoSound] = useState(null);
  useEffect(() => {
    const hippoSound = new Audio(hippoSounds);
    setHippoSound(hippoSound);
  }, []);

  const playSound = () => {
    if (hippoSound) {
      hippoSound.play();
    }
  };

  const handleClickNext = () => {
    if (hippoSound) {
      hippoSound.pause();
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
            src={choiceChoosen ? hippo : questionMark}
            alt=""
          />
        </div>

        <div className="options">
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
            Dolphin
          </button>
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={onWin}
          >
            Hippo
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Donkey
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

export default Level2;
