import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header className="navHeader d-flex justify-content-between align-items-center">
      <nav className="navbar navbar-expand-lg w-100 navHeader">
        <div className="container-fluid">
          <h1 className="navbar-brand tituloRick">Rick & Morty</h1>
          <ul className="navbar-nav nav-pills">
            <Link to='/'><li className="nav-item">Home</li></Link>
            <Link to='/characters'><li className="nav-item">Characters</li></Link>
            <Link to='/contact'><li className="nav-item">Contact</li></Link>            
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
