import { Breadcrumb, Layout, Menu } from "antd";
import React, { ReactElement } from "react";
import { Link, withRouter } from "react-router-dom";

const { Header, Content, Footer } = Layout;

interface Props {
  children: ReactElement;
}
export default function Navigation(props: Props): ReactElement {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]}>
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/movies">
          <Link to="/movies">Filme</Link>
        </Menu.Item>
        <Menu.Item key="/tvs">
          <Link to="/tvs">TV Serien</Link>
        </Menu.Item>
        <Menu.Item key="/actors">
          <Link to="/actors">Schauspieler</Link>
        </Menu.Item>
      </Menu>
      <div>{props.children}</div>
    </Layout.Header>
  );
}
