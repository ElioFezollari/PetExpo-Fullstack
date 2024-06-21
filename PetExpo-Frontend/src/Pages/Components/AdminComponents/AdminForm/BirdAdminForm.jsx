import { useState } from "react";
import { addAnimal, editAnimal } from "../../../Services/APIConnection";

const BirdAdminForm = ({
  id,
  setIsEditing,
  setMessage,
  setError,
  temperament,
  method,
}) => {
  const [species, setSpecies] = useState(undefined);
  const [commonName, setCommonName] = useState(undefined);
  const [family, setFamily] = useState(undefined);
  const [order, setOrder] = useState(undefined);
  const [genus, setGenus] = useState(undefined);
  const [imageUrl, setImageUrl] = useState(undefined);
  const [locations, setLocations] = useState([]);
  const [wingspanInCm, setWingspanInCm] = useState(undefined);
  const [habitat, setHabitat] = useState(undefined);
  const [diet, setDiet] = useState(undefined);
  const [migration, setMigration] = useState(undefined);
  const [predators, setPredators] = useState(undefined);
  const [colors, setColors] = useState([]);
  const [colorHex, setColorHex] = useState([]);
  const [description, setDescription] = useState(undefined);
  const [temp, setTemperament] = useState('Friendly');
  const [history, setHistory] = useState(undefined);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      species,
      commonName,
      family,
      order,
      genus,
      description,
      imageUrl,
      locations,
      wingspanInCm: parseFloat(wingspanInCm),
      habitat,
      diet,
      migration,
      temperament: temp,
      predators,
      history,
      colors,
      colorHex
    };

    if (method == "post") {
      addAnimal('birds',data).then((res) => {
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
    } else {
      editAnimal(id, "birds", data).then((res) => {
        setIsEditing(false);
        if (res.statusCode == 404) {
          setError(res.message);
          setTimeout(() => {
            setError(null);
          }, 2000);
        } else {
          setMessage(res.message);
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        }
      });
    }
  };
  const handleColorChange = (e) => {
    const inputColors = e.target.value.split(",");
    setColors(inputColors);
  };

  const handleColorHexChange = (e) => {
    const inputColorHex = e.target.value.split(",");
    setColorHex(inputColorHex);
  };

  const handleLocationChange = (e) => {
    const inputColorChange = e.target.value.split(",");
    setLocations(inputColorChange);
  };

  return (
    <form className="admin-form-cr">
      <label htmlFor="species">
        Species:{" "}
        <input
          value={species}
          onChange={(e) => {
            setSpecies(e.target.value);
          }}
          type="text"
          name="species"
          placeholder="Enter Species..."
        />
      </label>
      <label htmlFor="commonName">
        Name:{" "}
        <input
          value={commonName}
          onChange={(e) => {
            setCommonName(e.target.value);
          }}
          type="text"
          name="commonName"
          placeholder="Enter Common Name..."
        />
      </label>
      <label htmlFor="family">
        Family:{" "}
        <input
          value={family}
          onChange={(e) => {
            setFamily(e.target.value);
          }}
          type="text"
          name="family"
          placeholder="Enter Family..."
        />
      </label>
      <label htmlFor="order">
        Order:{" "}
        <input
          value={order}
          onChange={(e) => {
            setOrder(e.target.value);
          }}
          type="text"
          name="order"
          placeholder="Enter Order..."
        />
      </label>
      <label htmlFor="genus">
        Genus:{" "}
        <input
          value={genus}
          onChange={(e) => {
            setGenus(e.target.value);
          }}
          type="text"
          name="genus"
          placeholder="Enter Genus..."
        />
      </label>
      <label htmlFor="wingspanInCm">
        Wingspan:{" "}
        <input
          value={wingspanInCm}
          onChange={(e) => {
            setWingspanInCm(e.target.value);
          }}
          type="number"
          name="wingspanInCm"
          placeholder="Enter Wing Span in cm..."
        />
      </label>
      <label htmlFor="habitat">
        Habitat:{" "}
        <input
          value={habitat}
          onChange={(e) => {
            setHabitat(e.target.value);
          }}
          type="text"
          name="habitat"
          placeholder="Enter Habitat..."
        />
      </label>
      <label htmlFor="diet">
        Diet:{" "}
        <input
          value={diet}
          onChange={(e) => {
            setDiet(e.target.value);
          }}
          type="text"
          name="diet"
          placeholder="Enter Diet..."
        />
      </label>
      <label htmlFor="migration">
        Migration:{" "}
        <input
          value={migration}
          onChange={(e) => {
            setMigration(e.target.value);
          }}
          type="text"
          name="migration"
          placeholder="Enter Migration..."
        />
      </label>
      <label htmlFor="predators">
        Predators:{" "}
        <input
          value={predators}
          onChange={(e) => {
            setPredators(e.target.value);
          }}
          type="text"
          name="predators"
          placeholder="Enter Predators..."
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
          {temperament.map((temperament, index) => {
            return (
              <option key={index} value={temperament}>
                {temperament}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="locations" className="colors-edit">
        Locations (Seperate by commas):{" "}
        <input
          type="text"
          name="locations"
          placeholder="Albania,Canada,Germany"
          value={locations}
          onChange={handleLocationChange}
        />
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
export default BirdAdminForm;
