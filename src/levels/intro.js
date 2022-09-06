import AnimalQuestion from "../GuessAnimalPicture.png";
const IntroPage = (props) => {
  const nextPage = props.nextPage;
  return (
    <div className="container-fluid">
      <div className="background">
        <h1 className="title">Guess that Animal</h1>
        <div className="introText">
          <p>Turn you volume on! 🔊</p>
          <button className="startButton" onClick={nextPage}>
            Click to Start
          </button>
          <br></br>
          <img className="animalQuestion" src={AnimalQuestion} alt="" />
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
export default IntroPage;
