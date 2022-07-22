import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonLogout from "../components/buttons/ButtonLogout";

function Logout() {
  const handleLogout = (event) => {
    event.preventDefault();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/admin/logout`, {
        withCredentials: true,
      })
      .then(() => {
        alert("Successfully logged out");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("You're not authenticated");
        }
      });
  };

  return (
    <div>
      <Link to="/">
        <ButtonLogout handleLogout={handleLogout} />
      </Link>
    </div>
  );
}

export default Logout;
