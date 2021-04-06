import { Layout, Menu } from "antd";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactElement;
}
export default function Navigation(props: Props): ReactElement {
  return (
    <Layout.Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]}>
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/movies">
          <Link to="/movies">Filme</Link>
        </Menu.Item>
        <Menu.Item key="/actors">
          <Link to="/actors">Schauspieler</Link>
        </Menu.Item>
      </Menu>
      <div>{props.children}</div>
    </Layout.Header>
  );
}
