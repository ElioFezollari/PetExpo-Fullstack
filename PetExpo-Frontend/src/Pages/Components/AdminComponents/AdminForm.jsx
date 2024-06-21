import DogAdminForm from "./AdminForm/DogAdminForm";
import CatAdminForm from "./AdminForm/CatAdminForm";
import BirdAdminForm from "./AdminForm/BirdAdminForm";

const AdminForm = ({ id, setIsEditing, setMessage, setError, selectedAnimal, method }) => {
  const size = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];
  const levels = ["Low", "Average", "High"];
  const temperament = [
    "Friendly",
    "Energetic",
    "Playful",
    "Protective",
    "Obedient",
    "Independent",
    "Affectionate",
    "Stubborn",
  ];

  if (method === 'patch') {
    switch (selectedAnimal) {
      case 'Dogs':
        return (
          <DogAdminForm
            id={id}
            setIsEditing={setIsEditing}
            setMessage={setMessage}
            setError={setError}
            size={size}
            temperament={temperament}
            levels={levels}
          />
        );
      case 'Cats':
        return (
          <CatAdminForm
            id={id}
            setIsEditing={setIsEditing}
            setMessage={setMessage}
            setError={setError}
            size={size}
            levels={levels}
          />
        );
      default:
        return (
          <BirdAdminForm
            id={id}
            setIsEditing={setIsEditing}
            setMessage={setMessage}
            setError={setError}
            temperament={temperament}
          />
        );
    }
  } else {
    switch (selectedAnimal) {
      case 'Cats':
        return (
          <CatAdminForm
            setMessage={setMessage}
            setError={setError}
            size={size}
            levels={levels}
            method='post'
          />
        );
      case 'Birds':
        return (
          <BirdAdminForm
            setMessage={setMessage}
            setError={setError}
            temperament={temperament}
            method='post'
          />
        );
      default:
        return (
          <DogAdminForm
            setMessage={setMessage}
            setError={setError}
            size={size}
            temperament={temperament}
            levels={levels}
            method='post'
          />
        );
    }
  }
};

export default AdminForm;
