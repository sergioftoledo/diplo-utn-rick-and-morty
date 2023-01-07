import ListItemHome from "../ListItemHome/ListItemHome";
import "./Home.css";

function Home() {
  return (
    <section className="contenedor-home d-flex flex-column justify-content-center align-items-center">
      <h1 className="titulo">Rick & Morty Proyect</h1>
      <nav className="w-100">
        <ul className="d-flex justify-content-evenly list-unstyled">
          <ListItemHome dato="Characters" infoPath="/characters" />
          <ListItemHome dato="Contacts" infoPath="/contact" />
        </ul>
      </nav>
    </section>
  );
}

export default Home;
