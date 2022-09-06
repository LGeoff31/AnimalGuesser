import "./App.css";
import React, { useState } from "react";
import IntroPage from "./levels/intro.js";
import Level1 from "./levels/level1.js";
import Level2 from "./levels/level2.js";
import correct from "./correct.mp3";
import wrong from "./wrong.mp3";
import Level3 from "./levels/level3";
import Level4 from "./levels/level4";
import Level5 from "./levels/level5";
import Level6 from "./levels/level6";
import Level7 from "./levels/level7";
import Level8 from "./levels/level8";
import Level9 from "./levels/level9";
import Level10 from "./levels/level10";
import Level11 from "./levels/level11";
import Level12 from "./levels/level12";
import Level13 from "./levels/level13";
import Level14 from "./levels/level14";
import Level15 from "./levels/level15";
import Level16 from "./levels/level16";
import Level17 from "./levels/level17";
import Level18 from "./levels/level18";
import ConcludingPage from "./levels/conclusion.js";

const App = () => {
  var correctSound = new Audio(correct);
  var incorrectSound = new Audio(wrong);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const pages = {
    INTRO: "INTRO",
    LEVEL1: "LEVEL1",
    LEVEL2: "LEVEL2",
    LEVEL3: "LEVEL3",
    LEVEL4: "LEVEL4",
    LEVEL5: "LEVEL5",
    LEVEL6: "LEVEL6",
    LEVEL7: "LEVEL7",
    LEVEL8: "LEVEL8",
    LEVEL9: "LEVEL9",
    LEVEL10: "LEVEL10",
    LEVEL11: "LEVEL11",
    LEVEL12: "LEVEL12",
    LEVEL13: "LEVEL13",
    LEVEL14: "LEVEL14",
    LEVEL15: "LEVEL15",
    LEVEL16: "LEVEL16",
    LEVEL17: "LEVEL17",
    LEVEL18: "LEVEL18",
    CONCLUDING: "CONCLUDING",
  };
  const [choiceChoosen, setChoiceChoosen] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages.INTRO);

  const onWin = () => {
    setChoiceChoosen(true);
    correctSound.play();
    setCorrectAnswers((previousNum) => {
      return previousNum + 1;
    });
    console.log(`YOU CHCOOSE RIGHT, counter:${correctAnswers}`);
  };
  const onLose = () => {
    setChoiceChoosen(true);
    incorrectSound.play();
  };

  const nextPage = () => {
    setChoiceChoosen(false);
    switch (currentPage) {
      case pages.INTRO:
        setCurrentPage(pages.LEVEL1);
        break;
      case pages.LEVEL1:
        setCurrentPage(pages.LEVEL2);
        break;
      case pages.LEVEL2:
        setCurrentPage(pages.LEVEL3);
        break;
      case pages.LEVEL3:
        setCurrentPage(pages.LEVEL4);
        break;
      case pages.LEVEL4:
        setCurrentPage(pages.LEVEL5);
        break;
      case pages.LEVEL5:
        setCurrentPage(pages.LEVEL6);
        break;
      case pages.LEVEL6:
        setCurrentPage(pages.LEVEL7);
        break;
      case pages.LEVEL7:
        setCurrentPage(pages.LEVEL8);
        break;
      case pages.LEVEL8:
        setCurrentPage(pages.LEVEL9);
        break;
      case pages.LEVEL9:
        setCurrentPage(pages.LEVEL10);
        break;
      case pages.LEVEL10:
        setCurrentPage(pages.LEVEL11);
        break;
      case pages.LEVEL11:
        setCurrentPage(pages.LEVEL12);
        break;
      case pages.LEVEL12:
        setCurrentPage(pages.LEVEL13);
        break;
      case pages.LEVEL13:
        setCurrentPage(pages.LEVEL14);
        break;
      case pages.LEVEL14:
        setCurrentPage(pages.LEVEL15);
        break;
      case pages.LEVEL15:
        setCurrentPage(pages.LEVEL16);
        break;
      case pages.LEVEL16:
        setCurrentPage(pages.LEVEL17);
        break;
      case pages.LEVEL17:
        setCurrentPage(pages.LEVEL18);
        break;
      case pages.LEVEL18:
        setCurrentPage(pages.CONCLUDING);
        break;
      default:
        setCurrentPage(pages.INTRO);
        break;
    }
  };
  return (
    <div className="App">
      {(() => {
        switch (currentPage) {
          case pages.INTRO:
            return <IntroPage nextPage={nextPage} />;
          case pages.LEVEL1:
            return (
              <div>
                <Level1
                  onWin={onWin}
                  onLose={onLose}
                  choiceChoosen={choiceChoosen}
                  nextPage={nextPage}
                />
              </div>
            );
          case pages.LEVEL2:
            return (
              <Level2
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL3:
            return (
              <Level3
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL4:
            return (
              <Level4
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL5:
            return (
              <Level5
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL6:
            return (
              <Level6
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL7:
            return (
              <Level7
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL8:
            return (
              <Level8
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL9:
            return (
              <Level9
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL10:
            return (
              <Level10
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL11:
            return (
              <Level11
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL12:
            return (
              <Level12
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL13:
            return (
              <Level13
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL14:
            return (
              <Level14
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL15:
            return (
              <Level15
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL16:
            return (
              <Level16
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL17:
            return (
              <Level17
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.LEVEL18:
            return (
              <Level18
                onWin={onWin}
                onLose={onLose}
                choiceChoosen={choiceChoosen}
                nextPage={nextPage}
              />
            );
          case pages.CONCLUDING:
            return <ConcludingPage correctAnswers={correctAnswers} />;
          default:
            return <ConcludingPage correctAnswers={correctAnswers} />;
        }
      })()}
    </div>
  );
};

export default App;
