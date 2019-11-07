import React, { Component } from "react";
import axios from "axios";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import NavBar from "./NavBar";
import "./Home.css";
let itemsArray = [];
class Home extends Component {
  state = {
    amount: 500,
    months: 6,
    interestRate: 0,
    monthlyPayment: 0,
    numPayments: 0
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    //console.log(query);
    axios
      .get(
        `https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.months}`
      )
      .then(res => {
        // //console.log(res.data);
        this.setState(
          {
            interestRate: res.data.interestRate,
            monthlyPayment: res.data.monthlyPayment.amount,
            numPayments: res.data.numPayments
          },
          this.queryParamHandler()
        );
      })
      .catch(e => console.log(e));
  }
  queryParamHandler = () => {
    const query = new URLSearchParams(this.props.location.search);
    //console.log(query);
    let amount = 500;
    let duration = 6;
    for (let param of query.entries()) {
      if (param[0] == "amount") {
        amount = param[1];
        //console.log("amount", amount);
      }
      if (param[0] == "duration") {
        duration = param[1];
      }
    }

    axios
      .get(
        `https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${duration}`
      )
      .then(res => {
        //console.log("queryhandler data", res.data);

        if (res.data.status && res.data.status === "error") {
          //console.log("Error occurred");
        } else {
          this.setState({
            amount,
            months: duration,
            interestRate: res.data.interestRate,
            monthlyPayment: res.data.monthlyPayment.amount,
            numPayments: res.data.numPayments
          });
        }
      })
      .catch(e => console.log(e));
  };

  componentDidUpdate(prevProps, prevState) {
    // //console.log(duration);
    if (
      this.state.amount !== prevState.amount ||
      this.state.months !== prevState.months
    ) {
      axios
        .get(
          `https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.months}`
        )
        .then(res => {
          //  //console.log(res.data);

          if (res.data.status && res.data.status === "error") {
            alert("Error occurred");
          } else {
            this.setState({
              interestRate: res.data.interestRate,
              monthlyPayment: res.data.monthlyPayment.amount,
              numPayments: res.data.numPayments
            });
          }
        })
        .catch(e => console.log(e));
    }
  }

  localStorageAdder = () => {
    const amdu = {
      amount: `${this.state.amount}`,
      duration: `${this.state.months}`
    };
    itemsArray.push(amdu);
    // //console.log("after push", itemsArray);
    localStorage.setItem("loanamount", JSON.stringify(itemsArray));
    const data = JSON.parse(localStorage.getItem("loanamount"));
  };

  setAmount = amount => {
    this.props.location.search = "";
    this.setState({ amount }, this.localStorageAdder());
  };
  setDuration = duration => {
    this.props.location.search = "";
    this.setState({ months: duration }, this.localStorageAdder());
    // localStorage.setItem("loanamount", JSON.stringify(itemsArray));
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container w-100 card">
          <form>
            <div className="form-group">
              <label>Loan Amount</label>
              <InputRange
                maxValue={5000}
                minValue={500}
                value={this.state.amount}
                onChange={amount => this.setAmount(amount)}
                formatLabel={val => {
                  return `$${val}`;
                }}
              />
            </div>
            <div className="form-group">
              <label>Loan Duration (months)</label>
              <InputRange
                maxValue={24}
                minValue={6}
                value={this.state.months}
                onChange={months => this.setDuration(months)}
              />
            </div>
          </form>
          <br />
          <div className="interest-wrapper">
            <h2>Interest Details: </h2>
            <p className="interest-data">
              <span className="interest-label">Interest Rate: </span>
              <span className="interest-display data-display">
                ${this.state.interestRate}
              </span>
            </p>
            <p className="interest-data">
              <span className="interest-label">Monthly Payment:</span>{" "}
              <span className="payment-display data-display">
                ${this.state.monthlyPayment}
              </span>
            </p>
            <p className="interest-data">
              <span className="interest-label">Number of Installments:</span>{" "}
              <span className="number-display data-display">
                {this.state.numPayments}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
