import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {
  HomeTwoTone,
  SmileTwoTone,
  QuestionCircleTwoTone,
  ContainerTwoTone,
  SettingTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

const { SubMenu } = Menu;

function Navbar() {
  const [current, setCurrent] = useState("mail");
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      console.log("user:", user);
      setCurrentUser(user);
    });

    return subscribe;
  }, []);

  console.log("navbar currentUser:", currentUser);

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
            <Menu.Item key="setting:1">
              <Link to="/genre/35">Actions</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Top Rated">
            <Menu.Item key="setting:2">Top Rated</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Animation">
            <Menu.Item key="setting:3">
              <Link to="/genre/16">Animation</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          style={{ color: "white" }}
          key="User"
          icon={<SettingTwoTone />}
          title="User"
        >
          <Menu.ItemGroup
            title={`${currentUser ? currentUser?.email : "Default User"}`}
          />
          <Menu.Item key="setting:2">
            <Link to="/login">Log In</Link>
          </Menu.Item>

          <Menu.Item key="setting:3">
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
        </SubMenu>
        {/* {currentUser && currentUser?.email} */}
        {/* <button type="button">Log Out</button> */}
      </Menu>
    </div>
  );
}

export default Navbar;
