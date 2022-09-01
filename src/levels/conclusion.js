import happyEmoji from "../resultPicture.jpeg";
const concludingPage = (props) => {
  const correctAnswers = props.correctAnswers;
  return (
    <div className="container-fluid">
      <div className="background">
        <h1>You Made It To The End!!</h1>
        <h2>You scored {correctAnswers}/18</h2>
        <img classname="endImage" src={happyEmoji} alt="" />
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
