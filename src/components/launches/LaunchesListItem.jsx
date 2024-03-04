import { Link } from "react-router-dom";

const LaunchesListItem = ({ launch }) => {
  return (
    <div className="launchlistitem-container">
      <Link to={`/Launches/${launch.id}`}>
        <h3>{launch.name}</h3>

        <img src={launch.links.patch.small} alt={launch.name} />
      </Link>
      <p>Details: {launch.details}</p>
      <p>Date: {launch.date_utc}</p>
      <p>Flight number: {launch.flight_number}</p>
    </div>
  );
};

export default LaunchesListItem;
