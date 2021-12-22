import React from "react";

import "./user.scss";

// import { Layout, Menu } from "antd";
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   ShopOutlined,
//   HomeOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from "@ant-design/icons";
// import { Link } from "react-router-dom";
// import { Outlet } from 'react-router';
// import HeaderOne from './../Header/Header components/HeaderOne';
import FooterThree from "../Footer/Footer components/FooterThree";
import UserHeader from "./User components/UserHeader";
import Data from "./User components/Data.jsx";

// const { Header, Sider, Content } = Layout;
const User = () => {
  // const [collapsed, setCollapsed] = useState(false);
  // const [name, setName] = useState("");
  // const toggle = () => {
  //   console.log(!collapsed);
  //   setCollapsed(!collapsed);
  // };
  // const componentName = (name)=>{
  //   setName(name)
  // }
  return (
    <div className="userComponent">
      <UserHeader />
      <Data />
      <FooterThree />
    </div>
  );
};

export default User;
