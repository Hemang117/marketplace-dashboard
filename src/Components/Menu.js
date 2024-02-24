import React, { useEffect } from "react";
import "./Menu.css";
import logo from "../img/coplogoed.png";
import {
  FaIdCard,
  FaComment,
  FaWallet,
  FaChartLine,
  FaRegClock,

  FaSignOutAlt,
} from "react-icons/fa";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <a href="#" target="_blank" rel="norefferer">
      <img src={logo} alt="" />
      </a>

      <ul id="mainMenu">
        <Icon icon={<FaIdCard />} />
        <Icon icon={<FaComment />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>

      <ul className="lastMenu">
       
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
