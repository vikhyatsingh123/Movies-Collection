import React, { useState } from "react";
import { Menu, Switch } from "antd";
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar">
      <Menu mode="horizontal" theme={darkMode ? "dark" : "light"}>
        <Link to="/"><Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item></Link>
        <Link to="/about"><Menu.Item key="about" icon={<InfoCircleOutlined />}>
          About
        </Menu.Item></Link>
      </Menu>
      <div className="dark-mode-switch">
        <Switch onChange={handleDarkModeToggle} />
      </div>
    </div>
  );
};

export default Navbar;
