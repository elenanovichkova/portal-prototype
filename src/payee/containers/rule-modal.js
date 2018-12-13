import React, { Component } from "react";
import Modal from "react-modal";

import NewRuleFormWrapper from "./new-rule-form-wrapper.js";

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
    if (nextProps.showModal == true) {
      this.setState({ showModal: true });
    }
  }

  constructor(props) {
    super();
    this.state = {
      showModal: props.showModal
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
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
              <h3>{this.props.contextTitle}</h3>
            </div>
          </div>
          <div className="col-xs-1">
            <div className="text-right">
              <span className="fa fa-times" onClick={this.handleCloseModal} />
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
            {this.props.action == "new" && (
              <NewRuleFormWrapper domainData={this.props.domainData} />
            )}
            {this.props.action == "view" && <div>View rule</div>}
          </div>
        </div>
      </Modal>
    );
  }
}

export default RuleModal;
