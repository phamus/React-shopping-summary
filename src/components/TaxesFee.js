import React from "react";
import { Row, Col } from "react-bootstrap";

export default class TaxesFee extends React.Component {
  render() {
    return (
      <Row>
        <Col md={6}>Est. taxes and fee </Col>
        <Col md={6}>{`N${this.props.taxes}`}</Col>
      </Row>
    );
  }
}
