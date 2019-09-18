import React, { PureComponent } from "react";
import { Row, Col } from "react-bootstrap";

export default class EstimatedTotal extends PureComponent {
  render() {
    return (
      <Row>
        <Col md={6}>
          <h2>Est. Total</h2>
        </Col>
        <Col md={6}>
          <h2>{`N${this.props.price}`}</h2>
        </Col>
      </Row>
    );
  }
}
