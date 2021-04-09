import React, { ReactElement } from "react";
import { Layout, Menu } from "antd";
import "../App.css";
import { MovieList } from "./movies/MovieList";
import { BrowserRouter, Link, useLocation } from "react-router-dom";
import Router from "./Router";
import Navigation from "./Navigation";
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
