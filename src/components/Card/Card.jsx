import { useState } from "react";
import "./Card.css";

function Card({ info }) {
  const [hide, setHide] = useState(true);

  const showCharacterInfo = () => {
    setHide(false);
  };

  const hideInfo = () => {
    setHide(true);
  };

  return (
    <div className="d-flex card m-2 p-2 justify-content-between flex-row align-items-center p-3 CardCaracter">
      <div>
        <img src={info.image} alt={info.name} />
        <h3 className="card-title">{info.name}</h3>
        <button
          className={hide? "btn align-self-end btn-show-more": 'd-none'}
          onClick={showCharacterInfo}
        >
          show More
        </button>
      </div>
      {!hide ? (
        <div className="containerInfo">
          <span onClick={hideInfo} className="closeShowMore rounded">
            X
          </span>
          <ul className="listaInfo">
            <li>
              {" "}
              Character status: <span>{info.status}</span>
            </li>
            <li>
              {" "}
              Species: <span>{info.species}</span>
            </li>
            <li>
              Origin: <span>{info.location.name}</span>
            </li>
            <li>
              Gender: <span>{info.gender}</span>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Card;
