import React from "react";

import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

const style = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSaving: {
    color: "red",
    fontWeight: 800
  }
};

export default class PickUpSaving extends React.Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Picking your order in the store helps cut costs, and we pass the
          savings on to you
        </p>
      </Tooltip>
    );

    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={style.pickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={style.totalSaving} md={6}>
          {`N${this.props.price}`}
        </Col>
      </Row>
    );
  }
}
