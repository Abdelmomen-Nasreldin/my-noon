// import React from 'react'
import React, { useState, useEffect, useRef } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ShopOutlined,
  HomeOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const { Header, Sider, Content } = Layout;
// import "{ant-tooltip-inner}"
const Data = () => {
  const [windowWidth, setWindowWidth] = useState(() => {
    return window.innerWidth;
  });
  const siderRef = useRef();
  const sideControllerrSMRef = useRef();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);
  const [collapsed, setCollapsed] = useState(true);
  const [name, setName] = useState("");
  const toggle = () => {
    console.log(!collapsed);

    if (windowWidth <= 576) {
      setCollapsed(true);
      siderRef.current.style.marginLeft = -80
      if (siderRef.current.style.marginLeft === "-80px") {
        siderRef.current.style.marginLeft = "0px"
      }else {
        siderRef.current.style.marginLeft = "-80px"
      }
      // sideControllerrSMRef.current.style.
    } else {
      setCollapsed(!collapsed);
    }
  };
  const componentName = (name) => {
    setName(name);
  };
  return (
    <div className="userData">
      <Layout style={{ minHeight: " 70vh" }}>
        <Sider
          className="sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
          ref={siderRef}
        >
          <div className="logo" />
          <Menu
            className="sider"
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item
              key="1"
              icon={<ShopOutlined />}
              onClick={() => componentName("Order")}
            >
              <Link to="/User/order">Order</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<HomeOutlined />}
              onClick={() => componentName("Address")}
            >
              <Link to="/User/address">Address</Link>
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<UserOutlined />}
              onClick={() => componentName("Profile")}
            >
              <Link to="/User/profile">Profile</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background icon-header"
            style={{ padding: 0 }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger d-none d-sm-block",
                onClick: toggle,

              }
            )}
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger d-block d-sm-none",
                onClick: toggle,
                ref: sideControllerrSMRef

              }
            )}
            <h2>{name}</h2>
            {/* <MenuUnfoldOutlined className="trigger" onClick={toggle}/> */}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Data;
