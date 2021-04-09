import { Layout } from "antd";
import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import "../App.css";
import Navigation from "./Navigation";
import Router from "./Router";
const { Content, Footer } = Layout;

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Layout className="layout" aria-orientation="horizontal">
        <Navigation>
          <Router />
        </Navigation>
      </Layout>
    </BrowserRouter>
  );
}
