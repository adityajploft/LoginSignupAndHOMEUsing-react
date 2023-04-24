import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      name.trim().length > 0 &&
      password.trim().length > 0 &&
      email.trim().length > 0 &&
      phone.trim().length > 0 &&
      profession.trim().length > 0
    ) {
      const user = {
        name,
        email,
        password,
        phone,
        profession,
      };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Profile created successfully");
      navigate("/login");
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <div className="login">
      <h1 className="h1">SIGNUP PAGE</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              console.log(name);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
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

        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>

        <label>
          Profession:
          <select
            value={profession}
            onChange={(event) => setProfession(event.target.value)}
          >
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </label>

        <button type="submit">Submit</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
