import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getDomainRule } from "../actions/payee/index.js";

class Payees extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Domain name</th>
            <th>Enroll Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FOLDER A</td>
            <td onClick={() => this.props.getDomainRule("domain0")}>rule</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    payee: state.payee
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDomainRule }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payees);
