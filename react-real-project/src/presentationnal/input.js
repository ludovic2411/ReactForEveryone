import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input  extends Component {

  constructor(props) {
    super(props);
    this.state={value:"a value"};
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.handlerFromParent(this.state.value);
  }


  render() {
    return (
      <div>
        <p><label>{this.props.text}</label></p>
        <p><input type={this.props.inputType} placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange}/></p>
      </div>
    );
  }

}

Input.propTypes={
  text: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handlerFromParent: PropTypes.func
}

export default Input ;
