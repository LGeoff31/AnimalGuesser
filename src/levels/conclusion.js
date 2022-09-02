import happyEmoji from "../resultPicture.jpeg";
import anime from "../anime.png";
const concludingPage = (props) => {
  const correctAnswers = props.correctAnswers;
  return (
    <div className="container-fluid">
      <div className="background">
        <h1>You Made It To The End!!</h1>
        <h2>You scored {correctAnswers}/18</h2>
        <img classname="endImage" src={happyEmoji} alt="" />
        <img src={anime} alt="" />
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
    </div>
  );
};

export default concludingPage;
