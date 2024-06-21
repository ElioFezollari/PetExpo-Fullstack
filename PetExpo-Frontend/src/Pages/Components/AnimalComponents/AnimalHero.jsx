import scroll from '../../../assets/scroll-down.png'
const AnimalHero = ({ video, animal }) => {
  return (
    <div className="animal-hero">
      <video src={video} autoPlay muted loop></video>
      <div className="animal-hero-overlay">
        <p>Scroll down to view</p>
        <h1>{animal}</h1>
        <img src={scroll} alt="scroll down icon" />
      </div>
    </div>
  );
};

export default AnimalHero;
