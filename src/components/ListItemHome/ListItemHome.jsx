import { Link } from "react-router-dom";
import "./ListItemHome.css";

function ListItemHome({ dato, infoPath }) {

  return (
    <li className="listItem btn m-2 p-3">
      <Link to={infoPath}>{dato}</Link>
    </li>
  );
}

export default ListItemHome;
