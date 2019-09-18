import React, { PureComponent } from "react";
import { Button, Row, Col, Card, Media, Collapse } from "react-bootstrap";

export default class ItemDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "See" : "Hide "} item details
          {this.state.open === false ? ` +` : `- `}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card bg="light">
              <Card.Body>
                <Media>
                  <img
                    width={100}
                    height={100}
                    alt="thumbnail"
                    src="https://ng.jumia.is/fDgQBcQLS2ws7PfVCa3hdr5AVxQ=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/010093/1.jpg?1637 "
                  />

                  <Media.Body>
                    <p>
                      Danami University Of Life Hoodie- Light Grey & Navy Blue
                    </p>
                    <Row className="show-grid">
                      <Col md={6}>
                        <strong>{`N${this.props.price}`}</strong>
                        <br />
                        <strong className="price-strike">{`N${this.props.price}`}</strong>
                      </Col>
                      <Col md={6}>Qty: 1</Col>
                    </Row>
                  </Media.Body>
                </Media>
              </Card.Body>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}
