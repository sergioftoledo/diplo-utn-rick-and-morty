import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Filters from "../Filters/Filters";
import SectionCards from "../SectionCards/SectionCards";
import "./Characters.css";

function Characters() {
  const [datos, setDatos] = useState([]);
  const [datoPersonajes, setDatosPersonajes] = useState([]);

  const showValue = (e) => {
    if (e.target.checked) {
      const filterValue = e.target.value;
      if (filterValue === "Alive" || filterValue === "Dead") {
        const characterFiltered = datos.filter(
          (character) => character.status === filterValue
        );
        setDatos(characterFiltered);
      }
      if (filterValue === "Female" || filterValue === "Male") {
        const characterFiltered = datos.filter(
          (character) => character.gender === filterValue
        );
        setDatos(characterFiltered);
      }
      if (filterValue === "unknown") {
        const characterFiltered = datos.filter(
          (character) => character.origin.name === filterValue
        );
        setDatos(characterFiltered);
      }
    } else {
      setDatos(datoPersonajes);
    }
  };

  const apiRickAndMorty = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .catch((err) => console.log("error", err));

    return api;
  };

  useEffect(() => {
    const showInfoApi = async () => {
      const dato = await apiRickAndMorty();
      const infoCharacters = dato.results;
      setDatos(infoCharacters)
      setDatosPersonajes(infoCharacters);
    };
    showInfoApi();
  }, []);

  return (
    <div>
      <Navigation />
      <section className="d-flex container flex-column sectionFilter">
        <h3>Filter</h3>
        <div className="row justify-content-around">
          <Filters
            filterName="Characters Alive"
            datoFilter="Alive"
            showValue={showValue}
          />
          <Filters
            filterName="Characters Dead"
            datoFilter="Dead"
            showValue={showValue}
          />
          <Filters
            filterName="Female"
            datoFilter="Female"
            showValue={showValue}
          />
          <Filters filterName="Male" datoFilter="Male" showValue={showValue} />
          <Filters
            filterName="Origin Unknown"
            datoFilter="unknown"
            showValue={showValue}
          />
        </div>
      </section>
      <SectionCards datos={datos} />
    </div>
  );
}

export default Characters;
