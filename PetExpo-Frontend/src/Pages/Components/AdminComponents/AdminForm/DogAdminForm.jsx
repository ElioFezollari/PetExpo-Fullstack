import { useState } from "react";
import { addAnimal, editAnimal } from "../../../Services/APIConnection";

const DogAdminForm = ({ id,setIsEditing,setMessage,setError,size,temperament,levels,method}) => {

      const difficulty = ["Easy", "Medium", "Hard"];

  const [breed, setBreed] = useState();
  const [origin, setOrigin] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [temp, setTemperament] = useState('Friendly');
  const [aSize, setASize] = useState();
  const [lifespan, setLifespan] = useState();
  const [weight, setWeight] = useState();
  const [activity, setActivity] = useState();
  const [grooming, setGrooming] = useState();
  const [socialization, setSocialization] = useState();
  const [health, setHealth] = useState();
  const [intelligence, setIntelligence] = useState();
  const [childFriendly, setChildFriendly] = useState();
  const [preyDrive, setPreyDrive] = useState();
  const [trainability, setTrainability] = useState();
  const [colors, setColors] = useState([]);
  const [colorHex, setColorHex] = useState([]);
  const [description, setDescription] = useState();
  const [history, setHistory] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      breed,
      origin,
      imageUrl,
      temperament: temp,
      size: aSize,
      averageLifeSpan: parseInt(lifespan, 10),
      averageWeightKg: parseFloat(weight),  
      activityLevel: activity,
      groomingNeeds: grooming,
      socializationNeeds: socialization,
      healthIssues: health,
      intelligenceLevel: intelligence,
      childFriendly: childFriendly?true : false,
      preyDrive,
      trainability,
      coatColors: colors,
      coatColorHex: colorHex,
      description,
      history,
    };
    if(method=='post'){
      addAnimal('dogs',data).then((res) => {
        if (res.statusCode == 400) {
          const errorMessage = res.message.join("\n");
          const errorElements = errorMessage.split("\n").map((error, index) => (
            <div key={index}>{error}</div>
          ));
          setError(errorElements);

          setTimeout(() => {
            setError(null);
          }, 10000);
        } else {
          setMessage(res.message);
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        }
      });
    }
    else {editAnimal(id, "dogs", data)
      .then((res) => {
        setIsEditing(false)
        if(res.statusCode==404){
            setError(res.message);
            setTimeout(() => {
              setError(null);
            }, 2000);
        }
        else{
        setMessage(res.message);
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      }})}

  };
  const handleColorChange = (e) => {
    const inputColors = e.target.value.split(",");
    setColors(inputColors);
  };

  const handleColorHexChange = (e) => {
    const inputColorHex = e.target.value.split(",");
    setColorHex(inputColorHex);
  };

  return (
    <form className="admin-form-cr">
      <label htmlFor="breed">
        Breed:{" "}
        <input
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
          type="text"
          name="breed"
          placeholder="Enter breed..."
        />
      </label>
      <label htmlFor="origin">
        Origin:{" "}
        <input
          value={origin}
          onChange={(e) => {
            setOrigin(e.target.value);
          }}
          type="text"
          name="origin"
          placeholder="Enter origin..."
        />
      </label>
      <label htmlFor="imageUrl">
        Image Url:{" "}
        <input
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          type="url"
          name="url"
          placeholder="Enter Image Url..."
        />
      </label>
      <label htmlFor="temperament">
        Temperament:{" "}
        <select
          name="temperament"
          value={temp}
          onChange={(e) => setTemperament(e.target.value)}
        >
          {temperament.map((temperament,index) => {
            return <option key={index} value={temperament}>{temperament}</option>;
          })}
        </select>
      </label>
      <label htmlFor="size">
        Size:{" "}
        <select
          name="size"
          value={aSize}
          onChange={(e) => setASize(e.target.value)}
        >
          <option value="">-</option>
          {size.map((size, index) => {
            return (
              <option key={index} value={size}>
                {size}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="lifespan">
        Lifespan:{" "}
        <input
          type="number"
          name="breed"
          placeholder="Enter  average lifespan..."
          value={lifespan}
          onChange={(e) => setLifespan(e.target.value)}
        />
      </label>
      <label htmlFor="averageWeight">
        Weight:{" "}
        <input
          type="number"
          name="averageWeight"
          placeholder="Average weight in kg..."
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label htmlFor="activity">
        Activity Level:{" "}
        <select
          name="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="grooming">
        Grooming Needs:{" "}
        <select
          name="grooming"
          value={grooming}
          onChange={(e) => setGrooming(e.target.value)}
        >
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="socialize">
        Socializing Needs:{" "}
        <select
          name="socialize"
          value={socialization}
          onChange={(e) => setSocialization(e.target.value)}
        >
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="health">
        Health Issues:{" "}
        <select
          name="health"
          value={health}
          onChange={(e) => setHealth(e.target.value)}
        >
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="intelligence">
        Intelligence:{" "}
        <select
          name="intelligence"
          value={intelligence}
          onChange={(e) => setIntelligence(e.target.value)}
        >
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="childFriendly">
        Child Friendly:{" "}
        <select
          name="childFriendly"
          value={childFriendly}
          onChange={(e) => setChildFriendly(e.target.value)}
        >
          <option value="">-</option>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select>
      </label>
      <label htmlFor="preyDrive">
        Prey drive:{" "}
        <select
          name="preyDrive"
          value={preyDrive}
          onChange={(e) => setPreyDrive(e.target.value)}
        >
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label
        htmlFor="trainability"
        value={trainability}
        onChange={(e) => setTrainability(e.target.value)}
      >
        Trainability:{" "}
        <select name="trainability">
          <option value="">-</option>
          {difficulty.map((difficulty, index) => {
            return (
              <option key={index} value={difficulty}>
                {difficulty}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="colors" className="colors-edit">
        Colors (Seperate by commas):{" "}
        <input
          type="text"
          name="colors"
          placeholder="Blue,Red,Green"
          value={colors}
          onChange={handleColorChange}
        />
      </label>
      <label htmlFor="colorHex" className="colors-edit">
        Color Hex (Seperate by commas):{" "}
        <input
          type="text"
          name="colorHex"
          placeholder="#0000FF,#FF0000,#00FF00"
          value={colorHex}
          onChange={handleColorHexChange}
        />
      </label>
      <label htmlFor="description" className="text-area-label">
        Description:{" "}
        <textarea
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </label>
      <label htmlFor="history" className="text-area-label">
        History:{" "}
        <textarea
          name="history"
          value={history}
          onChange={(e) => {
            setHistory(e.target.value);
          }}
        ></textarea>
      </label>
      <button className="send-edit" onClick={handleSubmit}>
        Send new edit
      </button>
    </form>
  );
};
export default DogAdminForm;
