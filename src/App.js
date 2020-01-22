import React from "react";
import "./App.css";

import logo from "./assets/images/logo.png";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa!
        </p>

        <form>
          <label htmlFor="email">E-MAIL*</label>

          <input 
            type="text" 
            id="email" 
            placeholder="Seu melhor e-mail" 
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
