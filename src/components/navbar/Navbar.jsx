// import logo from "../assets/SpaceX-Logo.svg";
import { ReactComponent as Logo } from "../../assets/SpaceX-Logo.svg";
import { useNavigate } from "react-router-dom";
import NavTabs from "./NavTabs";
import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Logo fill="white" onClick={() => navigate("/")} className="logo" />
      <NavTabs />
    </>
  );
};

export default Navbar;
