import { Col, Divider, Row } from "antd";
import React, { ReactElement } from "react";

const style = { background: "#0092ff", padding: "8px 0" };

export default function Example(): ReactElement {
  return (
    <>
      {/* Kommentar, kann weg */}
      <Divider orientation="left">Je nach Breite 1 .. 6 Spaltem</Divider>

      {/* Jedem Element der Reihe links/rechts, oben/unten Abstände geben */}
      <Row gutter={[{ xs: 16, sm: 16, md: 24, lg: 32, xl: 32 }, { xs: 16, sm: 16, md: 24, lg: 32, xl: 32 }]}>
        {/* Je nach Auflösung entsprechend viele Spalten nutzen */}
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={style}><h1>1</h1></div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={style}><h1>2</h1></div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={style}><h1>3</h1></div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={style}><h1>4</h1></div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={style}><h1>5</h1></div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={style}><h1>6</h1></div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={style}><h1>7</h1></div>
        </Col>
      </Row>
    </>
  );
}
