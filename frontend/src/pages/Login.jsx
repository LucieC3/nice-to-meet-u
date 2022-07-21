import React, { useState } from "react";
import "./styles/Login.css";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import ButtonConnexion from "../components/ButtonConnexion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      swal({
        title: "Oups !",
        text: "Merci de renseigner votre email",
        icon: "error",
        confirmButtonText: "GOOD",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/admin/login`,
          { email, password },
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
        <img className="logo-admin" src="" alt="" />
      </div>
      <div className="formloginadmin">
        <form className="form-login-admin">
          <input
            className="inputEmailAdmin"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
