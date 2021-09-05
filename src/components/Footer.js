import React from "react";
import "./Footer.css";
import {
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">idkTV</span>
            </div>
            <div className="media-icons">
              <a href="#test">
                <LinkedinOutlined />
              </a>
              <a href="#test">
                <TwitterOutlined />
              </a>
              <a href="#test">
                <GithubOutlined />
              </a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Links</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/actors">Actors</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Techs</li>
              <li>
                <a href="#test">API</a>
              </li>
              <li>
                <a href="#test">React</a>
              </li>
              <li>
                <a href="#test">Ant Design</a>
              </li>
              <li>
                <a href="#test">React Redux</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Contact</li>
              <li>
                <a href="#test">+012 3456789</a>
              </li>
              <li>
                <a href="#test">contact@idkTV.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2021 idkTV</span>
            <label htmlFor="email" className="newsletter_container">
              <span>Subscribe to our newsletter</span>
              <input type="email" placeholder="Email" />
            </label>
            <span className="policy_terms">
              <a href="#test">Privacy policy</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
