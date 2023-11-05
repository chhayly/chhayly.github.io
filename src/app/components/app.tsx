"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
// import theme from '../../theme/themeConfig';

const { Header, Content, Footer } = Layout;

const App: React.FC<{body:any}> = ({ body }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      label: "Portfolio",
    },
    {
      key: "2",
      label: "Projects",
    },
    {
      key: "3",
      label: "Publications",
    },
    {
      key: "4",
      label: "Resume",
    },
  ];
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          {body}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Chhayly Sreng ©2023 | Porfolio
      </Footer>
    </Layout>
  );
};

export default App;
