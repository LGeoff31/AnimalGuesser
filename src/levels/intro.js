import AnimalQuestion from "../GuessAnimalPicture.png";
import pigSounds from "../animalSounds/pig.wav";
const IntroPage = (props) => {
  const nextPage = props.nextPage;
  //   var birdChirp = new Audio(BirdChirp);
  //   const playChirp = () => {
  //     birdChirp();
  //   };
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
