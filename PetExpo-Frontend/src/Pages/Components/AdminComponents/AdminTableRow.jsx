import { useState } from "react";
import AdminForm from "./AdminForm";
import { deleteAnimal } from "../../Services/APIConnection";

const AdminTableRow = ({
  animal,
  setMessage,
  setError,
  selectedAnimal,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const confirmDelete = () => {
    deleteAnimal(animal.id, selectedAnimal).then((res) => {
      setIsDeleting(false);
      if (res.statusCode === 404) {
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
  };
  return (
    <>
      <tr>
        <td>{animal.breed || animal.species}</td>
        <td>{animal.origin || animal.family}</td>
        <td className="button-td">
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit"}
          </button>{" "}
          <button
            className="delete-button"
            onClick={() => setIsDeleting(!isDeleting)}
          >
            {isDeleting ? "Cancel" : "Delete"}
          </button>{" "}
        </td>
      </tr>
      {isEditing && (
        <tr>
          <td colSpan="3">
            <div>
              <AdminForm
                id={animal.id}
                selectedAnimal={selectedAnimal}
                setIsEditing={setIsEditing}
                setMessage={setMessage}
                setError={setError}
                method='patch'
              />
            </div>
          </td>
        </tr>
      )}
      {isDeleting && (
        <tr>
          <td colSpan={3}>
            Are you sure you want to delete {animal.breed || animal.species}?{" "}
            <button
              className="delete-button"
              onClick={confirmDelete}
              style={{ width: "auto" }}
            >
              Confirm Deletion
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default AdminTableRow;