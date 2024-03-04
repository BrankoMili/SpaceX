import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../services/api";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

const RocketPage = () => {
  const { rocketId } = useParams();
  const [rocket, setRocket] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get(`/Rockets/${rocketId}`)
      .then(res => {
        setRocket(res.data);
      })
      .catch(error => {
        setError(error);
        console.error("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div className="rocketpage-container">
      <h1>{rocket.name}</h1>

      <img src={rocket.flickr_images[0]} alt={rocket.name} />
      <p className="description">{rocket.description}</p>
      <p>
        <b>Height:</b> {rocket.height.meters} meters
      </p>
      <p>
        <b>Mass:</b> {rocket.mass.kg} kg
      </p>
      <a href={rocket.wikipedia}>Wikipedia Link</a>
      <button onClick={() => navigate("/Rockets")}>Back To Rockets</button>
    </div>
  );
};

export default RocketPage;
