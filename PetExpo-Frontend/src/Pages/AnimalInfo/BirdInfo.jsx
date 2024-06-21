import { Link, useParams } from "react-router-dom";
import { getOneAnimal } from "../Services/APIConnection";
import { useEffect, useState } from "react";
import AnimalHero from "../Components/AnimallnfoComponents/AnimalHero";
const BirdInfo = () => {
  const [bird, setBird] = useState();
  const { name } = useParams();
  useEffect(() => {
    getOneAnimal(name, "birds").then((animal) => setBird(animal));
  }, []);
  return (
    bird && (
      <>
        <AnimalHero animal={bird} name={name} />
        <div className="animal-info-wrapper">
        <div className="desc-wrapper">
        <div className="animal-info">
          <p>Species: {bird.species}</p>
          <p>Locations: {bird.locations.map((location) => location + ", ")}</p>
          <p>Common name: {bird.commonName}</p>
          <p>Family: {bird.family}</p>
          <p>Order: {bird.order}</p>
          <p>Habitat: {bird.habitat || 'Not mentioned'}</p>
          <p>Wingspan in cm: {bird.wingspanInCm || 'Not mentioned'}</p>
          <p>Habitat: {bird.habitat || 'Not mentioned'}</p>
          <p>Diet: {bird.diet || 'Not mentioned'}</p>
          <p>Temperament: {bird.temperament || 'Not mentioned'}</p>
          <p>Predators: {bird.predators || 'Not mentioned'}</p>
          <p>Colors: {bird.colors.length>0 ? bird.colors.map((color)=>color + ' ') : 'Not mentioned'}</p>
          <p>{bird.colorHex.length>0 ? bird.colorHex.map((color,index)=><span key={index} className="hex-colors" style={{backgroundColor:color}}></span>) : ''}</p>
        </div>
        <p>Description: {bird.description}</p>
        <p>History: {bird.history || "Not mentioned"}</p>
        </div>
        <Link to='/birds' className="animals-button">Go back to birds</Link>
        </div>
      </>
    )
  );
};

export default BirdInfo;
