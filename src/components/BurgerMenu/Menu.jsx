import React, { useEffect, useState } from "react";
import { StyledMenu } from "./menuStyles";
import { bool } from "prop-types";
import { Link } from "react-router-dom";
const Menu = ({ open, setOpen }) => {
  const [dropDown, openDropDown] = useState(false);

  const clickLink = () => {
    setOpen(!open);

    if (dropDown) openDropDown(!dropDown);
  };

  useEffect(() => {
    if (dropDown) {
      document.getElementById("contactLink").style.display = "none";
    }
  });

  return (
    <StyledMenu open={open}>
      <Link className="links" to={`/`} onClick={() => clickLink()}>
        HOME
      </Link>
      <Link className="links" to={`/company`} onClick={() => clickLink()}>
        COMPANY
      </Link>
      <div className="dropdown">
        <Link
          className="links"
          id="servicesLink"
          onClick={() => openDropDown(!dropDown)}
        >
          SERVICES
        </Link>
        <div className="dropdown-content">
          <Link className="links" to={`/blanchard`} onClick={() => clickLink()}>
            BLANCHARD GRINDING
          </Link>
          <Link className="links" to={`/surface`} onClick={() => clickLink()}>
            SURFACE GRINDING
          </Link>
        </div>
      </div>
      <Link
        className="links"
        id="contactLink"
        to={`/contact`}
        onClick={() => setOpen(!open)}
      >
        CONTACT
      </Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
