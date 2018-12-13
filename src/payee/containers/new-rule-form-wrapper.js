import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreaters, bindActionCreators } from "redux";

import RuleFormRedux from "./rule-form-redux.js";

import {
  getDomainRule,
  getRegisteredTins,
  getPayers
} from "../../actions/payee/index.js";

class NewRuleFormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domainData: props.domainData,
      errors: [],
      success: false,
      payerList: [],
      tinList: []
    };
  }

  componentDidMount() {
    console.log(this.state.domainData);
    this.props.getDomainRule(this.state.domainData.domain.domID);
    this.props.getRegisteredTins();
    this.props.getPayers();
  }

  render() {
    return (
      <div>
        {!this.props.domainRule.isFetching &&
          !this.props.registeredTins.isFetching &&
          !this.props.payers.isFetching && (
            <RuleFormRedux
              registeredTins={this.props.registeredTins.data}
              payers={this.props.payers.data}
              options={this.props.options}
              multiple={this.props.multiple ? this.props.multiple : false}
              onSubmit={values => console.log(values)}
            />
          )}
        {(this.props.domainRule.isFetching ||
          this.props.registeredTins.isFetching ||
          this.props.payers.isFetching) && <div>loading...</div>}
      </div>
    );
  }
}

function mapStateToProps({
  payee: { domainRule },
  payee: { registeredTins },
  payee: { payers }
}) {
  return {
    domainRule,
    registeredTins,
    payers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getDomainRule,
      getRegisteredTins,
      getPayers
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRuleFormWrapper);
