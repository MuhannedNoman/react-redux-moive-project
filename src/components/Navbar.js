import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeTwoTone,
  SmileTwoTone,
  QuestionCircleTwoTone,
  ContainerTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
// import Genres from "./Genres";

const { SubMenu } = Menu;

function Navbar() {
  const [current, setCurrent] = useState("mail");
  // const [genre, setGenre] = useState([]);
  // const [type, setType] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // const URL = `https://api.themoviedb.org/3/discover/movie?api_key=e15bbb219d7a04f817488309f7efe37f&with_genres=${type}`;

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setGenre(data.results);
  //       setIsLoading(false);
  //     });
  // }, [URL, type]);

  // console.log(genre);

  // console.log(URL);

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
      </Menu>
    </div>
  );
}

export default Navbar;
