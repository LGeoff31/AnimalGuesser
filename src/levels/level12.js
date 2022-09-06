import monkeySounds from "../animalSounds/monkey.wav";
import questionMark from "../questionMark.png";
import monkey from "../animalPictures/monkey.jpeg";
import { useEffect, useState } from "react";
import ProgressBar from "./progress.js";
const Level12 = (props) => {
  const completed = Number((12 / 18) * 100).toFixed(0);
  const onWin = props.onWin;
  const onLose = props.onLose;
  const choiceChoosen = props.choiceChoosen;
  const nextPage = props.nextPage;
  const [monkeySound, setMonkeySound] = useState(null);
  useEffect(() => {
    const monkeySound = new Audio(monkeySounds);
    setMonkeySound(monkeySound);
  }, []);

  const playSound = () => {
    if (monkeySound) {
      monkeySound.play();
    }
  };

  const handleClickNext = () => {
    if (monkeySound) {
      monkeySound.pause();
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
            src={choiceChoosen ? monkey : questionMark}
            alt=""
          />
        </div>

        <div className="options">
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Kangaroo
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Panda
          </button>
          <button
            className={choiceChoosen ? "choice green" : "choice"}
            onClick={onWin}
          >
            Gorilla
          </button>
          <button
            onClick={onLose}
            className={choiceChoosen ? "choice red" : "choice"}
          >
            Chimpanzee
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

export default Level12;
