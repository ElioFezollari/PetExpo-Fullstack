const AnimalHero = ({name,animal}) =>{
  
    return animal ? (
      <div className="animal-hero" id="animal-info-hero">
        <div className="dog-hero-image-container">
          <img className="dog-hero-image" src={animal.imageUrl} alt="Image of a dog" draggable="false" />
        </div>
      </div>
    ) : (
      <div className="animal-loading-div">
        <p>Loading {name}...</p>
      </div>
    );
  };
export default AnimalHero