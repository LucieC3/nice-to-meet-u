import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";
import axios from "axios";
import swal from "sweetalert";
import ButtonConnexion from "../components/buttons/ButtonConnexion";

function Login() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pseudo || !password) {
      swal({
        title: "Oups !",
        text: "Merci de renseigner votre pseudo",
        icon: "error",
        confirmButtonText: "GOOD",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/admin`,
          { pseudo, password },
          { withCredentials: true }
        )
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="login-div">
      <form className="form-login">
        <div className="input-pseudopass">
          <input
            className="inputPseudo"
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
          <input
            className="inputPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttonconnexion">
          <Link to="/">
            <ButtonConnexion handleSubmit={handleSubmit} />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
