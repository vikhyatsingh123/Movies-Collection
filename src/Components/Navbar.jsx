import React, { useState } from "react";
import { Menu, Switch } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Implement dark mode styling or theme switch here
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
        <Menu.Item key="switch">
          <Switch onChange={handleDarkModeToggle} />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
