import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../../services/api";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const LaunchPage = () => {
  const { launchId } = useParams();
  const [launch, setLaunch] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get(`/launches/${launchId}`)
      .then(res => {
        setLaunch(res.data);
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
    <>
      <div className="launchpage-container">
        <h1>{launch.name}</h1>
        <img src={launch.links.patch.small} alt={launch.name} />
        <p>Details: {launch.details}</p>
        <p>Date: {launch.date_utc}</p>
        <p>Flight number: {launch.flight_number}</p>
        <a href={launch.links.article}>Article link</a>

        <button onClick={() => navigate("/Launches")}>Back To Launches</button>
      </div>
    </>
  );
};

export default LaunchPage;
