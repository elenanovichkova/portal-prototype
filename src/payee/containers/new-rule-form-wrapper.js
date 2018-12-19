import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import RuleFormRedux from "./rule-form-redux.js";
import RuleValidate from "./rule-validate.js";
import CoreForm from "./core-form.js";

import {
  getDomainRule,
  getRegisteredTins,
  getPayers
} from "../../actions/payee/index.js";

class NewRuleFormWrapper extends React.Component {
  componentDidMount() {
    this.props.getDomainRule(this.props.domainData.domain.domID);
    this.props.getRegisteredTins();
    this.props.getPayers();
  }

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
      tins: this.props.domainRule.tins,
      payers: this.props.domainRule.payers,
      npis: this.props.domainRule.npis
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  updateDomainRule(values) {
    console.log("########## values ###########", values);
    this.setState({ tins: values.tins, payers: values.payers });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {!this.props.domainRule.isFetching &&
          !this.props.registeredTins.isFetching &&
          !this.props.payers.isFetching &&
          page === 1 && (
            <RuleFormRedux
              registeredTins={this.props.registeredTins.data}
              payers={this.props.payers.data}
              options={this.props.options}
              multiple={this.props.multiple ? this.props.multiple : false}
              onSubmit={values => {
                this.nextPage();
                this.updateDomainRule(values);
              }}
              handleCloseModal={this.props.handleCloseModal}
            />
          )}
        {page === 2 && (
          <RuleValidate
            tins={this.state.tins}
            payers={this.state.payers}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            handleCloseModal={this.props.handleCloseModal}
          />
        )}
        {page === 3 && (
          <CoreForm
            tins={this.state.tins}
            payers={this.state.payers}
            previousPage={this.previousPage}
            onSubmit={onSubmit}
            handleCloseModal={this.props.handleCloseModal}
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
