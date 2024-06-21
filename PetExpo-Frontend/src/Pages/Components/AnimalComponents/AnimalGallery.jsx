import { useEffect, useState } from "react";
import { getAll } from "../../Services/APIConnection";
import AnimalCard from "./AnimalCard";
import AnimalPopUp from "../AnimalComponents/AnimalPopUp";
import AnimalSearchForm from "./AnimalSearchForm";

const AnimalGallery = ({ animal }) => {
  const [animals, setAnimals] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState("");
  const [filteredSelect, setFilteredSelect] = useState();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  // Fetch data from the api using the APIConnection get all method
  useEffect(() => {
    getAll(animal).then((animal) => setAnimals(animal));
  }, []);

  // Using the filteredSelect and filter method to make it so  animals shown match the states set by the user
  let filteredAnimals = animals.filter(
    (animal) =>
      (animal.breed &&
        animal.breed.toLowerCase().includes(filteredSearch.toLowerCase())) ||
      (animal.locations &&
        animal.species.toLowerCase().includes(filteredSearch.toLowerCase()) &&
        (!filteredSelect ||
          (animal.origin &&
            animal.origin.toLowerCase() === filteredSelect.toLowerCase()) ||
          (animal.locations &&
            animal.locations &&
            animal.locations.some((location) => {
              return location
                .toLowerCase()
                .includes(filteredSelect.toLowerCase());
            }))))
  );

  // Methods to trigger and close the pop up menu
  const cardClicked = (animal) => {
    setSelectedAnimal(animal);
  };
  const popUpClosed = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="animal-gallery">
      <AnimalSearchForm
        setFilteredSearch={setFilteredSearch}
        filteredSearch={filteredSearch}
        setFilteredSelect={setFilteredSelect}
        animal={animal}
        animals={animals}
      />
      <div className="animal-card-wrapper">
        <AnimalCard
          cardClicked={cardClicked}
          filteredAnimals={filteredAnimals}
          animal={animal}
        />
      </div>
      {selectedAnimal && (
        <AnimalPopUp animal={selectedAnimal} closePopUp={popUpClosed} />
      )}
    </div>
  );
};

export default AnimalGallery;
