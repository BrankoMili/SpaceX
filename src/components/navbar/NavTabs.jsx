import React from "react";
import NavTabsItem from "./NavTabsItem";

const NavTabs = () => {
  return (
    <div className="navtabs-wrapper">
      <NavTabsItem value="Launches" />
      <NavTabsItem value="Rockets" />
      <NavTabsItem value="Ships" />
    </div>
  );
};

export default NavTabs;
