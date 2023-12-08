import React, { useState } from "react";
import { Menu, Switch } from "antd";
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar">
      <Menu mode="horizontal" theme={darkMode ? "dark" : "light"}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />}>
          About
        </Menu.Item>
      </Menu>
      <div className="dark-mode-switch">
        <Switch onChange={handleDarkModeToggle} />
      </div>
    </div>
  );
};

export default Navbar;
