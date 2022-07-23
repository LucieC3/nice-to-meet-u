import React, { useState } from "react";
import "./styles/Login.css";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import ButtonConnexion from "../components/buttons/ButtonConnexion";

function Login() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
        .then(() => navigate("/admin", { replace: true }))
        .catch((err) => {
          // alert(err.response.data.error);
          console.error(err);
        });
    }
  };

  return (
    <div className="loginadmin">
      <div className="admin-login-top">
        <h1>Bienvenue</h1>
      </div>
      <div className="formloginadmin">
        <form className="form-login-admin">
          <input
            className="inputPseudoAdmin"
            type="text"
            name="pseudo"
            id="pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
          <input
            className="inputLogPasswordAdmin"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="buttoncontinueadmin">
            <Link to="/admin">
              <ButtonConnexion handleSubmit={handleSubmit} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
