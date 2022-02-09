import React from "react";
import { Button } from "antd";
import { Layout, Row, Col,Avatar, Menu, Breadcrumb } from "antd";
import { useLocation,useHistory } from "react-router-dom";
import { useStateValue } from "../../util/StateProvider.jsx";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Layout.scss";
import Navbar from "../screens/navbar/Navbar.js";
// https://avatars.dicebear.com/4.6/api/initials/ab.svg
const { Header, Content, Footer } = Layout;
const Head = () => {
  const history = useHistory();
  const [getdata] = useStateValue();
  const [, dispatch] = useStateValue();
  const location = useLocation();
  return (
    <div>
    <Navbar/>
    </div>
  );

};

export default Head;
