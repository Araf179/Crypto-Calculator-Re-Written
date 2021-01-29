import React from "react";
import { currencyList } from "../config/currencyList";
import { cryptoList } from "../config/cryptoList";
import {
  calculateCryptoPrice,
  calculateCurrencyPrice,
} from "../actions/actions";
import { connect } from "react-redux";
import "../App.css";

class mainScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedCurrency: "USD",
      selectedCrypto: "Bitcoin",
    };
  }

  handleSelectedCurrency = (index: number) => {
    console.log("onPress is being fired", currencyList[index]);
    this.setState({ selectedCurrency: currencyList[index] });
  };

  handleSelectedCrypto = (index: number) => {
    this.setState({ selectedCrypto: cryptoList[index] });
  };

  calculateCryptoPrice = (e: any) => {
    this.props.calculateCryptoPrice(
      e.target.value,
      this.state.selectedCurrency,
      this.state.selectedCrypto
    );
  };

  calculateCurrencyPrice = (e: any) => {
    this.props.calculateCurrencyPrice(
      e.target.value,
      this.state.selectedCurrency,
      this.state.selectedCrypto
    );
  };

  render() {
    return (
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="container">
          <div className="row justify-content-md-center justify-content-between">
            <div className="col-md-auto marginTopConverter">
              <h2>Select Conversion information</h2>
              <div className="input-group mb-3">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {this.state.selectedCurrency}
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Value"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  value={this.props.conversion.currencyValue}
                  onChange={(value) => this.calculateCryptoPrice(value)}
                />
                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-8 ms-auto">
                              <ul>
                                {currencyList.map((data, idx) => {
                                  return (
                                    <li key={idx} className="liNoDotsButton">
                                      <button
                                        onClick={() =>
                                          this.handleSelectedCurrency(idx)
                                        }
                                        type="button"
                                        data-bs-dismiss="modal"
                                        className="btn btn-light"
                                      >
                                        {data}
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  {this.state.selectedCrypto}
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Value"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  value={
                    this.props.conversion.cryptoValue ||
                    this.props.conversion.cryptoValue
                  }
                  onChange={(value) => this.calculateCurrencyPrice(value)}
                />
              </div>
              <div
                className="modal fade"
                id="exampleModal2"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-8 ms-auto">
                            <ul>
                              {cryptoList.map((data, idx) => {
                                return (
                                  <li key={idx} className="liNoDotsButton">
                                    <button
                                      onClick={() =>
                                        this.handleSelectedCrypto(idx)
                                      }
                                      type="button"
                                      data-bs-dismiss="modal"
                                      className="btn btn-light"
                                    >
                                      {data}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: any) => ({
  conversion: state.conversion,
});

export default connect(mapStateToProps, {
  calculateCryptoPrice,
  calculateCurrencyPrice,
})(mainScreen);
