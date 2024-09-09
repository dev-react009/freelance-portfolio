import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";

const Nav = () => {
  const location = useLocation();
  const [toggleIcon, setToggleIcon] = useState(false);
  const navigate = useNavigate();
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

  const handleRouteChange=(link)=>{
      navigate(link);
    setToggleIcon(false);
  }

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
              key={ind+"hello"}
              className={`navbar_container__menu_itm ${
                location.pathname === itm.to ? "active" : ""
              }`}
            > 
            
              <p className="navbar_container__menu_itm_links" onClick={()=>handleRouteChange(itm.to)}>
              
                <i class="animation"></i>{itm.label}<i class="animation"></i></p>
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
