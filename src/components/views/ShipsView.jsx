import { useContext, useEffect } from "react";
import { ShipsContext } from "../../context/ShipsContext";
import instance from "../../services/api";
import {
  FETCH_SHIPS_REQUEST,
  FETCH_SHIPS_SUCCESS,
  FETCH_SHIPS_FAILURE
} from "../../constants/constants";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import ShipsList from "../ships/ShipsList";

const ShipsView = () => {
  const { state, dispatch } = useContext(ShipsContext);
  const { loading, error, ships } = state;

  useEffect(() => {
    dispatch({
      type: FETCH_SHIPS_REQUEST
    });

    instance
      .get("/ships")
      .then(res => {
        dispatch({
          type: FETCH_SHIPS_SUCCESS,
          payload: res.data.slice(4, 16)
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_SHIPS_FAILURE,
          payload: err
        });
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <ShipsList ships={ships} />
    </div>
  );
};

export default ShipsView;
