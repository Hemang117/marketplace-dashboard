import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown, FaPortrait } from "react-icons/fa";


function TopContainer() {
  useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      mouseTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener("mouseleave", () => {
      mouseTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
  }, []);

  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Hello, there" />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>
        <div className="profileImage">
         
          <FaPortrait />
        
        </div>
        <p className="profileName">name here</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>

        <div className="menuContainer" id="menuContainer">
          <ul>
            <li>Dropdown 1</li>
            <li>Dropdown 2</li>
            <li>Dropdown 3</li>
            <li>Dropdown 4</li>
            <li>Dropdown 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
