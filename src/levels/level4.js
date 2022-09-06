import lionSounds from "../animalSounds/lion.wav";
import questionMark from "../questionMark.png";
import lion from "../animalPictures/lion.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level4 = (props) => {
  const completed = Number((4 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [lionSound, setLionSound] = useState(null);
  useEffect(() => {
    const lionSound = new Audio(lionSounds);
    setLionSound(lionSound);
  }, []);

  const playSound = () => {
    if (lionSound) {
      lionSound.play();
    }
  };

  const handleClickNext = () => {
    if (lionSound) {
      lionSound.pause();
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
            src={choiceChoosen ? lion : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Dinosaur
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Wolf
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Tiger
          </button>
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={onWin}
          >
            Lion
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

export default Level4;
