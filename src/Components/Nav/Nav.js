import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const Nav = () => {
  const location = useLocation();
  const [toggleIcon, setToggleIcon] = useState(false);

  const HandleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const data = [
    {
      label: "HOME",
      to: "/",
    },
    {
      label: "ABOUT  ME",
      to: "/About",
    },
    {
      label: "SKILLS",
      to: "/Skills",
    },
    {
      label: "RESUME",
      to: "/Resume",
    },
    {
      label: "PROJECTS",
      to: "/Portfolio",
    },
    {
      label: "CONTACT",
      to: "/Contact",
    },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          {/* <Link to={"/"} className="navbar_container_logo">
            <FaReact size={30} />
            Sriram Garapati
          </Link> */}
        </div>
        <ul className={`navbar_container__menu ${toggleIcon ? "active" : ""} `}>
          {data.map((itm, ind) => (
            <li
              key={ind}
              className={`navbar_container__menu_itm ${
                location.pathname === itm.to ? "active" : ""
              }`}
            >
              <Link to={itm.to} className="navbar_container__menu_itm_links">
                {itm.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={HandleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
