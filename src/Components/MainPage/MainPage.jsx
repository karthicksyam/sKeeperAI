import React from "react";
import Dropdown from "react-dropdown";
import "../MainPage/MainPage.css";
import SkeeperAILogo2 from "../../assets/skeeperlogo-small.png";
import AlMascoLogo from "../../assets/almasco-logo.png";
import CenterComp from "../CenterComp/Center.jsx"
import { GoHomeFill } from "react-icons/go";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { PiPlaceholderBold } from "react-icons/pi";
import { useState } from "react";

const NavItem = ({ active, logo, title, onClick }) => {
  return (
    <a className={active ? "nav-item-active" : "nav-item"} onClick={onClick}>
      {logo}
      {title}
    </a>
  );
};

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onChangeActive = (index) => {
    setActiveIndex(index);
  };

  const navElements = [
    { logo: <GoHomeFill />, title: "Dashboard", key: 0 },
    { logo: <IoGrid />, title: "Inventory", key: 1 },
    { logo: <FaListUl />, title: "Work Order", key: 2 },
    { logo: <PiPlaceholderBold />, title: "Placeholder", key: 3 },
  ];

  return (
    <div className="main-container">
      <div className="sidebar-container">
        <img
          className="skeeper-logo"
          src={SkeeperAILogo2}
          alt="skeeperlogo-small"
        />
        <div className="underline" />
        <div className="menu-list">
          {navElements.map((item, index) => (
            <NavItem
              key={item.key}
              logo={item.logo}
              title={item.title}
              active={index === activeIndex}
              onClick={() => onChangeActive(index)}
            />
          ))}
        </div>
        <div className="underline-bottom"></div>
        <img className="almasco-image" src={AlMascoLogo} alt="AlMascoLogo" />
      </div>
      <div className="changing-display">
        <CenterComp activeIndex={activeIndex}/>
      </div>
    </div>
  );
};

export default MainPage;
