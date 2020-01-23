import React, { useState } from "react"
import "./App.css"
import api from "./services/api"

import logo from "./assets/images/logo.png";

function App() {
  const [ email, setEmail ] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id: id } = response.data;

    localStorage.setItem('user', id);
  }

  return (
    <div className="container">
      <img className="logo" src={logo} alt="AirCnC" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL*</label>

          <input 
            type="text" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
