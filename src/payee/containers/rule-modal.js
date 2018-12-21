import React, { Component } from "react";
import { connect } from "react-redux";
import { destroy } from "redux-form";
import Modal from "react-modal";

import NewRuleFormWrapper from "./new-rule-form-wrapper.js";
import ViewRule from "./view-rule.js";

Modal.setAppElement("#common-react-modal");

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%"
  }
};

class RuleModal extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("in component will receive props");
    if (nextProps.showModal == true) {
      this.setState({ showModal: true, view: nextProps.action });
    }
  }

  constructor(props) {
    super();
    this.state = {
      showModal: props.showModal,
      view: props.action
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.showEditRuleForm = this.showEditRuleForm.bind(this);
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  showEditRuleForm() {
    this.setState({ view: "edit" });
  }

  render() {
    console.log(this.state);
    return (
      <Modal
        isOpen={this.state.showModal}
        contentLabel="Minimal Modal Example"
        style={customStyles}
      >
        <div className="row">
          <div className="col-xs-1">
            <span> </span>
          </div>
          <div className="col-xs-10">
            <div className="text-center">
              {this.state.view === "new" && <h3>NEW RULE</h3>}
              {this.state.view === "edit" && <h3>EDIT RULE</h3>}
              {this.state.view === "view" && <h3>VIEW RULE</h3>}
            </div>
          </div>
          <div className="col-xs-1">
            <div className="text-right">
              <span
                className="fa fa-times"
                onClick={() => {
                  this.handleCloseModal();
                  /*this.props.dispatch(destroy("wizard-rule-form"));*/
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="text-left">
              <h3>{this.props.domainData.domain.domName}</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-right">
              <h3>{this.props.domainData.currBank.bankName}</h3>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            {this.state.view == "new" && (
              <NewRuleFormWrapper
                domainData={this.props.domainData}
                handleCloseModal={props => {
                  this.handleCloseModal();
                  /*props.destroy("wizard-rule-form");*/
                }}
                onSubmit={(values, dispatch, props) => {
                  /*props.destroy("wizard-rule-form");*/
                  this.handleCloseModal();
                }}
              />
            )}
            {this.state.view == "edit" && (
              <NewRuleFormWrapper
                domainData={this.props.domainData}
                handleCloseModal={this.handleCloseModal}
                onSubmit={(values, dispatch, props) => {
                  console.log("submitting from -values", values);
                  console.log("submitting from dispatch", dispatch);
                  console.log("submitting from -values", props);
                  //props.destroy("wizard-rule-form");
                  this.handleCloseModal();
                }}
              />
            )}
            {this.state.view == "view" && (
              <div>
                <div>
                  <ViewRule domainData={this.props.domainData} />
                </div>
                <button type="button" onClick={this.showEditRuleForm}>
                  EDIT
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    );
  }
}

export default RuleModal;
