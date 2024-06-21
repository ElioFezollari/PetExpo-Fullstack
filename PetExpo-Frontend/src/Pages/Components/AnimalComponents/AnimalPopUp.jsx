import close from "../../../assets/close.svg";
import { motion,AnimatePresence } from "framer-motion";
import { cardAnimation } from "../../../Variants";
import BirdPopUp from "./AnimalPopUp/BirdPopUp";
import DogPopUp from "./AnimalPopUp/DogPopUp";
import CatPopUp from "./AnimalPopUp/CatPopUp";
const AnimalPopUp = ({ animal, closePopUp }) => {
  return (
    <div className="pop-up-wrapper">
    <AnimatePresence>
        {animal && (
            <motion.div
            className="animal-pop-up"   
            key={animal.id} 
            variants={cardAnimation}
            initial='hidden'
            animate='visible'
            exit='exit'>
        <div className="pop-up-button-wrapper">
          <div className="pop-up-content-wrapper">
            <button onClick={() => closePopUp()} className="pop-up-button">
              <img src={close} />
            </button>
            <div>
              <img
                className="animal-image"
                src={animal.imageUrl}
                alt="picture of an animal"
              />
              <div className="heading-pop-up">
                <h4>Main Details</h4>
                <p>Name: {animal.breed}</p>
                {animal.origin ? (
                  <p>Country of origin: {animal.origin}</p>
                ) : (
                  <p>
                    Country in which this bird can be found:{" "}
                    {animal.locations.map((location)=> location + ' ')}
                  </p>
                )}
              </div>
            </div>
            <div className="text-pop-up">
              <div className="additional-details-header">
                <h4>Additional Details</h4>
              </div>
              <div className="additional-details">
                {animal.locations ? <BirdPopUp animal={animal}/>: animal.temperament?<DogPopUp animal={animal}/> : <CatPopUp animal={animal}/>}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
        )}
      
      </AnimatePresence>
      <div className="pop-up-overlay"></div>
    </div>
  );
};
export default AnimalPopUp;
