import { useEffect, useState } from "react";
import { getAll } from "./Services/APIConnection";
import AdminFilter from "./Components/AdminComponents/AdminFilter";
import AdminTable from "./Components/AdminComponents/AdminTable";
import AdminForm from "./Components/AdminComponents/AdminForm";

const Admin = () => {
  const [selectedAnimal, setSelectedAnimal] = useState("Dogs");
  const [fetchedAnimal, setFetchedAnimal] = useState();
  const [filteredSearch, setFilteredSearch] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    getAll(selectedAnimal).then((animal) => setFetchedAnimal(animal));
  }, [selectedAnimal]);

  let filteredAnimals =
    fetchedAnimal && fetchedAnimal.length > 0
      ? fetchedAnimal.filter(
          (animal) =>
            (animal.breed &&
              animal.breed
                .toLowerCase()
                .includes(filteredSearch.toLowerCase())) ||
            (animal.species &&
              animal.species
                .toLowerCase()
                .includes(filteredSearch.toLowerCase()))
        )
      : [];

  return (
    <div className="admin-wrapper">
      <div className="admin-page">
        <h3>ADMIN PAGE</h3>
        <AdminFilter
          filteredSearch={filteredSearch}
          setFilteredSearch={setFilteredSearch}
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
          setIsCreating={setIsCreating}
          isCreating={isCreating}
        />
        <div className="message-error-div">
        {message && <h5>{message}</h5>}
        {error && <h4>{error}</h4>}
        </div>
        {fetchedAnimal ? (
          isCreating == false ? (
            <AdminTable
              setMessage={setMessage}
              setError={setError}
              setSelectedAnimal={setSelectedAnimal}
              selectedAnimal={selectedAnimal}
              filteredAnimals={filteredAnimals}
            />
          ) : (
            <div className='creation-form'>
              <h2>Help us create more {selectedAnimal}</h2> 
            <AdminForm setMessage={setMessage} setError={setError} selectedAnimal={selectedAnimal} method='post' />
            </div>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Admin;