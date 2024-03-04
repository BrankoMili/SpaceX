import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../../services/api";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const ShipPage = () => {
  const { shipId } = useParams();
  const [ship, setShip] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get(`Ships/${shipId}`)
      .then(res => {
        setShip(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div className="shipspage-container">
      <h3>{ship.name}</h3>
      <img src={ship.image} alt={ship.name} />
      <p>Year built: {ship.year_built}</p>
      <p>Type: {ship.type}</p>
      <p>Mass: {ship.mass_kg} kg</p>
      <a href={ship.link}>Link For More Details</a>
      <button onClick={() => navigate("/Ships")}>Back to Ships</button>
    </div>
  );
};

export default ShipPage;
