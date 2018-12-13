import React from "react";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

class Select2wrap extends React.Component {
  render() {
    return (
      <Select2
        name={this.name}
        className="form-control tins-form-control"
        multiple={this.props.multiple}
        value={this.props.input.value}
        onChange={this.props.input.onChange}
        data={this.props.data}
        options={this.props.options}
      />
    );
  }
}

export default Select2wrap;
