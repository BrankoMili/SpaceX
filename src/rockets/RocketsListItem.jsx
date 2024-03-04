import { Link } from "react-router-dom";

const RocketsListItem = ({ rocket }) => {
  return (
    <div className="rocketslistitem-container">
      <Link to={`/Rockets/${rocket.id}`}>
        <h3>{rocket.name}</h3>
        <img src={rocket.flickr_images[0]} alt={rocket.name} />
      </Link>
      <p className="description">{rocket.description}</p>
      <p>
        <b>Height:</b> {rocket.height.meters} meters
      </p>
      <p>
        <b>Mass:</b> {rocket.mass.kg} kg
      </p>
    </div>
  );
};

export default RocketsListItem;
