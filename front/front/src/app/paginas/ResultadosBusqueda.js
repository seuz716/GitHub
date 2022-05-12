import React from "react";
import "./resultadosBusqueda.css"
import Resultado from "../componentes/Resultado";

export default function ResultadosBusqueda() {
  return (
    <>
      <div>
        
        <nav className="navbar navbar-dark bg-dark " >
          <div className="container-fluid">
            <a className="navbar-brand">Buscar</a>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
       
      </div>
      <fieldset>
          <legend className="navbar-brand">Resultado</legend>
                <div className="resultados">
          <Resultado />
          <Resultado />
          <Resultado />
          <Resultado />
          <Resultado />
           <Resultado />
      </div>
      </fieldset>

    </>
  );
}
