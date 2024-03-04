import { Link } from "react-router-dom";

const ShipsListItem = ({ ship }) => {
  return (
    <div className="shipslistitem-container">
      <Link to={`/Ships/${ship.id}`}>
        <h3>{ship.name}</h3>
        <img src={ship.image} alt={ship.name} />
      </Link>
      <p>Year built: {ship.year_built}</p>
      <p>Type: {ship.type}</p>
    </div>
  );
};

export default ShipsListItem;
