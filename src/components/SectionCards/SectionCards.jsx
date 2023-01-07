import Card from "../Card/Card";
import "./SectionCards.css";

function SectionCards({datos}) {

  return (
    <section>
      <div className="d-flex flex-wrap justify-content-center">
        {datos.map((dato) => {
          return <Card className="CardCaracters" key={dato.id} info={dato} />;
        })}
      </div>
    </section>
  );
}

export default SectionCards;
