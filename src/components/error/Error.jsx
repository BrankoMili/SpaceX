import { ReactComponent as RefreshIcon } from "../../assets/Refresh.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Error = ({ error }) => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0); // reload current route
  };
  return (
    <div className="error-wrapper">
      <p>Something went wrong. Please try again</p>
      <p>{error.response.data}</p>

      <div className="refresh-icon" onClick={refreshPage}>
        <RefreshIcon />
      </div>
    </div>
  );
};

export default Error;
