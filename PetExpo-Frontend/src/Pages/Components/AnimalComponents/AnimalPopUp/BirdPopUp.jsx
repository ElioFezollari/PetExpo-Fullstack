import { Link } from "react-router-dom";

const BirdPopUp = ({ animal }) => {
  return (
    <>
      <p>Description: {animal.description}</p>
      <p>Common name: {animal.commonName}</p>
      <p>Family: {animal.family}</p>
      <p>Order: {animal.order}</p>
      <p>Habitat: {animal.habitat || 'Not mentioned'}</p>
      <p>History: {animal.history || 'Not mentioned'}</p>
      <Link to={animal.species}>Learn more about this bird...</Link>
    </>
  );
};
export default BirdPopUp;
