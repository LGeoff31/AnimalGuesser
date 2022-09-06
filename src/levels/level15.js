import wildbeastSounds from "../animalSounds/wildbeast.wav";
import questionMark from "../questionMark.png";
import wildbeast from "../animalPictures/wildbeast.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level15 = (props) => {
  const completed = Number((15 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [wildbeastSound, setWildbeastSound] = useState(null);
  useEffect(() => {
    const wildbeastSound = new Audio(wildbeastSounds);
    setWildbeastSound(wildbeastSound);
  }, []);

  const playSound = () => {
    if (wildbeastSound) {
      wildbeastSound.play();
    }
  };

  const handleClickNext = () => {
    if (wildbeastSound) {
      wildbeastSound.pause();
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
            src={choiceChoosen ? wildbeast : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={onWin}
          >
            Wildbeast
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Lion
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Tiger
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Crocodile
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

export default Level15;
