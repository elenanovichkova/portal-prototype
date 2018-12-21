import React from "react";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

class Select2tokenwrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: { ...props.options, createTag: props.createTag },
      data: this.getData(props.selectedData, props.initialValues)
    };
  }

  getData(selectedNpis, initialNpis) {
    console.log("selected NPIs", selectedNpis);
    console.log("initial NPIs", initialNpis);
    let res = selectedNpis
      ? selectedNpis.map(npi => ({ id: npi, text: npi }))
      : initialNpis
      ? initialNpis.map(npi => ({ id: npi, text: npi }))
      : [];
    console.log(res);
    return res;
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
          data={this.state.data}
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
