import { Breadcrumb, Button, Layout } from "antd";
import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import "../App.css";
import { BreadCrumb } from "./BreadCrumb";
import Navigation from "./Navigation";
import Router from "./Router";
const { Content, Footer } = Layout;

export default function App(): ReactElement {
  // return (
  //   <BrowserRouter>
  //     <Layout className="layout" aria-orientation="horizontal">
  //       <Navigation>
  //         <Router />
  //       </Navigation>
  //     </Layout>
  //   </BrowserRouter>
  // );
  return (
    <BrowserRouter>
      <Layout>
        <Navigation>
          <Router />
        </Navigation>
        {/* <Layout style={{ background: "darkblue" }}>
          <BreadCrumb />
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout> */}
      </Layout>
    </BrowserRouter>
  );
}
