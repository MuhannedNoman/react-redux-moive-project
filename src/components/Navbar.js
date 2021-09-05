import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeTwoTone,
  SmileTwoTone,
  QuestionCircleTwoTone,
  ContainerTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function Navbar() {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{
          background: "black",
          color: "white",
          border: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Menu.Item key="home" icon={<HomeTwoTone />}>
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<QuestionCircleTwoTone />}>
          <Link style={{ color: "white" }} to="/about">
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="actors" icon={<SmileTwoTone />}>
          <Link style={{ color: "white" }} to="/actors">
            Actors
          </Link>
        </Menu.Item>
        <SubMenu
          style={{ color: "white" }}
          key="genres"
          icon={<ContainerTwoTone />}
          title="genres"
        >
          <Menu.ItemGroup title="Actions">
            <Menu.Item key="setting:1">Actions</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Top Rated">
            <Menu.Item key="setting:2">Top Rated</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Animation">
            <Menu.Item key="setting:3">Animation</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Navbar;
