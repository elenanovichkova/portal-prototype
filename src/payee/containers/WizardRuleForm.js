import React, { Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";

class WizardRuleForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <WizardRuleNewRule onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardRuleValidateRule
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardCoreForm
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

WizardRuleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default WizardRuleForm;
