import { useEffect, useContext } from "react";
import instance from "../../services/api";
import LaunchesList from "../launches/LaunchesList";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { LaunchesContext } from "../../context/LaunchesContext";
import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE
} from "../../constants/constants";

const LaunchesView = () => {
  const { state, dispatch } = useContext(LaunchesContext);
  const { launches, loading, error } = state;

  useEffect(() => {
    dispatch({ type: FETCH_LAUNCHES_REQUEST });

    instance
      .get("/launches")
      .then(res => {
        dispatch({
          type: FETCH_LAUNCHES_SUCCESS,
          payload: res.data.slice(0, 10)
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_LAUNCHES_FAILURE,
          payload: error
        });
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <h3>Launches list</h3>
      <LaunchesList launches={launches} />
    </div>
  );
};

export default LaunchesView;
