import React, { Component } from "react";
import "../indexSpace/IndexSpace.css";
import { Layout, Menu } from "antd";
import Headshot from "../Components/Headshot";
import { Link, Outlet } from "react-router-dom";
import UserDropdown from "../Components/UserDropdown";
import PerDynamic from "./PerDynamic";

const { Header, Content, Footer } = Layout;

export default function DetailContents() {
  return (
    <>
      <Layout className="layout" style={{ height: "auto" }}>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            padding: "0 8%",
          }}
        >
          <div className="logo">
            {/* <Link to=''> */}
            <h1>Personal Space</h1>
            {/* <img className='logoimg' src={Logo}></img> */}
            {/* </Link> */}
          </div>
          {/* <span className='header-username' style={{ color: 'white', float: 'right', marginLeft: 30 }}>LianYii</span> */}
          <div className="headshot">
            <Headshot />
            <UserDropdown />
          </div>

          <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="mine">我的</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "100px 50px 0px", height: "auto" }}>
          <div className="site-layout-content">
            <PerDynamic></PerDynamic>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", color: "darkgray" }}>
          ----- END -----
        </Footer>
      </Layout>
    </>
  );
}
