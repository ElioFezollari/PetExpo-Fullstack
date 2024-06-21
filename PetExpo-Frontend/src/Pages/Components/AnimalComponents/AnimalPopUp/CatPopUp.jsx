import { Link } from "react-router-dom";

const CatPopUp = ({ animal }) => {
  return (
    <>
      <p>Description: {animal.description}</p>
      <p>Size : {animal.size}</p>
      <p>Life Span: {animal.averageLifeSpan || "Not metioned"}</p>
      <p>Weight in kg: {animal.weightInKg || "Not metioned"}</p>
      <p>Activity level: {animal.activityLevel || "Not mentioned"}</p>
      <p>History: {animal.history || "Not mentioned"}</p>
      <Link to={animal.breed}>Learn more about this cat...</Link>
    </>
  );
};
export default CatPopUp;
