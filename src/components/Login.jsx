import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import MoviePage from "./MoviePage";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.email === email && user.password === password) {
      // history.push("/movies");
      // <MoviePage />;
      alert("Logged in successfully.");
      navigate("/moviesPage");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="login">
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        <p>
          Do not have a account ? <Link to="/">SignUp here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
