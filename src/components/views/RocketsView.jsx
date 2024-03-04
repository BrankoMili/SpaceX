import { useEffect, useContext } from "react";
import instance from "../../services/api";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import RocketsList from "../../rockets/RocketsList";
import { RocketsContext } from "../../context/RocketsContext";
import {
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKETS_FAILURE
} from "../../constants/constants";

const RocketsView = () => {
  const { state, dispatch } = useContext(RocketsContext);
  const { error, loading, rockets } = state;

  useEffect(() => {
    dispatch({ type: FETCH_ROCKETS_REQUEST });

    instance
      .get("/rockets")
      .then(res => {
        dispatch({
          type: FETCH_ROCKETS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.error("Error:", err);
        dispatch({
          type: FETCH_ROCKETS_FAILURE,
          payload: err
        });
      });
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <div>
      <h3>Rockets list</h3>
      <RocketsList rockets={rockets} />
    </div>
  );
};

export default RocketsView;
