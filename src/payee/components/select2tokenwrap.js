import React from "react";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

class Select2tokenwrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: { ...props.options, createTag: props.createTag }
    };
  }

  render() {
    return (
      <div
        className={`${
          this.props.meta.touched && this.props.meta.error ? "has-error" : ""
        }`}
      >
        <label
          className={`form-control-label form-control-label-${
            this.props.input.name
          }`}
        >
          {this.props.label}
        </label>
        <Select2
          name={this.props.input.name}
          className={`form-control ${this.props.input.name}-form-control`}
          data={this.props.data}
          multiple={this.props.multiple}
          value={this.props.input.value}
          onChange={this.props.input.onChange}
          options={this.state.options}
        />
        {this.props.meta.touched && this.props.meta.error && (
          <span className="field-error-message">{this.props.meta.error}</span>
        )}
      </div>
    );
  }
}

export default Select2tokenwrap;
