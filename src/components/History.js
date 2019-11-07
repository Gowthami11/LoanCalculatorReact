import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class History extends Component {
  homePageUpdate = (amount, duration) => {
    // console.log(amount, duration);
    const queryParm = [];

    queryParm.push(`amount=${amount}`);
    queryParm.push(`duration=${duration}`);
    const queryString = queryParm.join("&");
    this.props.history.push({
      pathname: "/",
      search: "?" + queryString
    });
  };
  render() {
    const data = JSON.parse(localStorage.getItem("loanamount"));

    return (
      <div>
        {data.map(dt => (
          <li
            type="1"
            key={Math.random()}
            style={{
              width: "80%",
              border: "2px solid #eee",
              padding: "1px",
              margin: "20px",
              boxshadow: "0px 1px 2px #ccc",
              display: "inline-bock"
            }}
            onClick={() => {
              this.homePageUpdate(dt.amount, dt.duration);
            }}
          >
            <ol>{`amount:${dt.amount}`}</ol>
            <ol>{`${"    "}duration:${dt.duration} months`}</ol>
            <br />

            <br />
          </li>
        ))}
      </div>
    );
  }
}

export default History;
