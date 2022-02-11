import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons/lib/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  // Called once when the component mount
  useEffect(() => {
    // Get the width of the screen
    const handleResize = () => setScreenSize(window.innerWidth);

    // Get the width anytime the window resize
    window.addEventListener("resize", handleResize);

    // Remove thr resize event whrn the component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Called whenever the screen size changes
  useEffect(() => {
    if (screenSize < 768) {
      setScreenSize(false);
    } else {
      setScreenSize(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoZ</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />} key="1">
            <Link to="/" className="menu-text">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} key="2">
            <Link to="/cryptocurrencies" className="menu-text">Cryptocurrencies</Link>
          </Menu.Item>
          {/* <Menu.Item icon={<MoneyCollectOutlined />} key="3">
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item> */}
          <Menu.Item icon={<BulbOutlined />} key="4">
            <Link to="/news" className="menu-text">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
