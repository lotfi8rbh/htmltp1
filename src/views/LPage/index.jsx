import React from "react";
import { Link } from "react-router-dom";

const LPage = () => {
  return (
    <>

      <h1>Bienvenue sur notre site!</h1>

      <button><Link to="/sign-up">Se connecter</Link></button>
    </>
  );
};

export default LPage;
