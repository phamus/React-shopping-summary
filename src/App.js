import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SubTotal from "./components/SubTotal/SubTotal";
import PickUpSavings from "./components/PickUpSaving";
import TaxesFee from "./components/TaxesFee";
import EstimatedTotal from "./components/EstimatedTotal";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";
import { connect } from "react-redux";
import { handleChange } from "./Actions/promoCodeAction";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 3500,
      pickupSaving: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }

  componentDidMount() {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSaving) * 0.0875
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSaving + this.state.taxes
        });
      }
    );
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };
  render() {
    return (
      <Container className="container justify-content-md-center">
        <Row>
          <Col className="purchase-card">
            <SubTotal price={this.state.total.toFixed(2)} />
            <PickUpSavings price={this.state.pickupSaving} />
            <TaxesFee taxes={this.state.taxes.toFixed(2)} />
            <hr />
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
            <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
            <hr />
            <PromoCode
              giveDiscount={() => this.giveDiscountHandler()}
              isDisable={this.state.disablePromoButton}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { promoCode: state.promoCode.value };
};
export default connect(
  mapStateToProps,
  { handleChange }
)(App);
