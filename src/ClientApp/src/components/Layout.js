import React from "react";
import { Col, Grid, Row } from "react-bootstrap-4";
import NavMenu from "./NavMenu";

export default props => (
  <Grid fluid>
    <Row>
      <Col sm={3}>
        <NavMenu />
      </Col>
      <Col sm={9}>
        {props.children}
      </Col>
    </Row>
  </Grid>
);
