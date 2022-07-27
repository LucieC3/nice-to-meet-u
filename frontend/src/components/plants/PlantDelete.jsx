import React from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function PlantDelete() {
  const { id } = useParams();

  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/plantes/${id}`)
      .then(() => {
        swal({
          title: "YEAH !",
          text: "Ta plante a bien été supprimée.",
          icon: "success",
          button: "Bien reçu",
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          swal({
            title: "Oups !",
            text: "Une erreur s'est produite lors de la suppression de ta plante.",
            icon: "error",
            button: "OK",
          });
        }
      });
  };

  return (
    <div>
      <Link to="/plantes">
        <button type="button" className="delete-plant" onClick={handleDelete}>
          Supprimer cette plante
        </button>
      </Link>
    </div>
  );
}

export default PlantDelete;
