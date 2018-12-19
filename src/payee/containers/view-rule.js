import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getDomainRule } from "../../actions/payee/index.js";

class ViewRule extends React.Component {
  componentDidMount() {
    this.props.getDomainRule(this.props.domainData.domain.domID);
  }

  render() {
    return (
      <div>
        {!this.props.domainRule.isFetching && (
          <div className="domain-rule-info">
            <h4 className="domain-rule-info-id">
              <small className="domain-rule-info-label domain-rule-info-label-id">
                RULE ID:{" "}
              </small>
              <strong className="domain-rule-info-value domain-rule-info-value-ruleid">
                {this.props.domainRule.data.id}
              </strong>
            </h4>
            <h4 className="domain-rule-info-status">
              <small className="domain-rule-info-label domain-rule-info-label-status">
                RULE STATUS:{" "}
              </small>
              <strong className="domain-rule-info-value domain-rule-info-value-status">
                {this.props.domainRule.data.status}
              </strong>
            </h4>
            <h4 className="domain-rule-info-createdby">
              <small className="domain-rule-info-label domain-rule-info-label-createdby">
                RULE CREATED BY:{" "}
              </small>
              <strong className="domain-rule-info-value domain-rule-info-value-createdby">
                {this.props.domainRule.data.createdBy}
              </strong>
            </h4>
            <h4 className="domain-rule-info-created">
              <small className="domain-rule-info-label domain-rule-info-label-created">
                RULE CREATED ON DATE:{" "}
              </small>
              <strong className="domain-rule-info-value domain-rule-info-value-created">
                {this.props.domainRule.data.created}
              </strong>
            </h4>
            {this.props.domainRule.data.deletedBy && (
              <h4 className="domain-rule-info-deletedby">
                <small className="domain-rule-info-label domain-rule-info-label-deletedby">
                  RULE DELETED BY:{" "}
                </small>
                <strong className="domain-rule-info-value domain-rule-info-value-deletedby">
                  {this.props.domainRule.data.deletedBy}
                </strong>
              </h4>
            )}
            {this.props.domainRule.data.deleted && (
              <h4 className="domain-rule-info-deleted">
                <small className="domain-rule-info-label domain-rule-info-label-deleted">
                  RULE STATUS:{" "}
                </small>
                <strong className="domain-rule-info-value domain-rule-info-value-deleted">
                  {this.props.domainRule.data.status}
                </strong>
              </h4>
            )}
            {this.props.domainRule.data.changedBy && (
              <h4 className="domain-rule-info-changedby">
                <small className="domain-rule-info-label domain-rule-info-label-changedby">
                  RULE CHANGED BY:{" "}
                </small>
                <strong className="domain-rule-info-value domain-rule-info-value-changedby">
                  {this.props.domainRule.data.changedBy}
                </strong>
              </h4>
            )}
            {this.props.domainRule.data.changed && (
              <h4 className="domain-rule-info-changed">
                <small className="domain-rule-info-label domain-rule-info-label-changed">
                  RULE CHANGED ON DATE:{" "}
                </small>
                <strong className="domain-rule-info-value domain-rule-info-value-changed">
                  {this.props.domainRule.data.changed}
                </strong>
              </h4>
            )}
            <h4 className="domain-rule-info-tins">
              <small className="domain-rule-info-label domain-rule-info-label-tins">
                TINs:{" "}
              </small>
              <strong className="domain-rule-info-value domain-rule-info-value-tins">
                {this.props.domainRule.data.tins
                  ? this.props.domainRule.data.tins.join(", ")
                  : ""}
              </strong>
            </h4>
            <h4 className="domain-rule-info-payers">
              <small className="domain-rule-info-label domain-rule-info-label-payers">
                PAYERS:{" "}
              </small>
              <strong className="domain-rule-info-value domain-rule-info-value-payers">
                {this.props.domainRule.data.payers
                  ? this.props.domainRule.data.payers.join(", ")
                  : ""}
              </strong>
            </h4>
            <h4 className="domain-rule-info-npis">
              <small className="domain-rule-info-label domain-rule-info-label-npis">
                {this.props.domainRule.data.includenpi
                  ? this.props.domainRule.data.includenpi.toUpperCase()
                  : ""}{" "}
                NPIs:{" "}
              </small>
              <strong className="domain-rule-info-value domain-rule-info-value-npis">
                {this.props.domainRule.data.npis
                  ? this.props.domainRule.data.npis.join(", ")
                  : ""}
              </strong>
            </h4>
          </div>
        )}
        {this.props.domainRule.isFetching && <div>loading...</div>}
      </div>
    );
  }
}

function mapStateToProps({ payee: { domainRule } }) {
  return {
    domainRule
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getDomainRule
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRule);
