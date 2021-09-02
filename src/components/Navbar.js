import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeTwoTone,
  SmileTwoTone,
  QuestionCircleTwoTone,
  ContainerTwoTone,
} from "@ant-design/icons";

const { SubMenu } = Menu;

function Navbar() {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div
    // style={{
    //   display: "flex",
    //   justifyContent: "space-between",
    //   background: "black",
    //   padding: "0px 20px",
    //   alignItems: "center",
    // }}
    >
      {/* <h1 style={{ color: "white" }}>idkTV</h1> */}
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
          Home
        </Menu.Item>
        <Menu.Item key="about" icon={<QuestionCircleTwoTone />}>
          About
        </Menu.Item>
        <Menu.Item key="actors" icon={<SmileTwoTone />}>
          Actors
        </Menu.Item>
        <SubMenu key="genres" icon={<ContainerTwoTone />} title="genres">
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
