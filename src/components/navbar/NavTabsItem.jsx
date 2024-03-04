import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavTabsItem = ({ value }) => {
  const location = useLocation();

  return (
    <div
      className={location.pathname.includes(`/${value}`) && "underline-text"}
    >
      <Link to={`/${value}`}>{value}</Link>
    </div>
  );
};

export default NavTabsItem;
