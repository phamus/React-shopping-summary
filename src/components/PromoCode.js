import React, { Component } from "react";
import {
  Button,
  Collapse,
  Card,
  Form,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";

import { connect } from "react-redux";
import { handleChange } from "../Actions/promoCodeAction";

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? ` Apply ` : `Hide `}
          Promo Code
          {this.state.open === false ? ` +` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card bg="light">
              <Card.Body>
                <Row className="show-grid">
                  <Col md={12}>
                    <Form>
                      <FormGroup controlId="formInLineName">
                        <FormLabel>
                          <h6>Promo Code</h6>
                        </FormLabel>
                        <FormControl
                          type="text"
                          placeholder="Enter Promo Code"
                          value={this.props.promoCode}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <Button
                        block
                        variant="success"
                        className="btn-round"
                        disabled={this.props.isDisable}
                        onClick={this.props.giveDiscount}
                      >
                        Apply
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { promoCode: state.promoCode.value };
};

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCode);
