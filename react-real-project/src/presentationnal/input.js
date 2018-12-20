import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input  extends Component {

  render() {
    return (
      <p>
        <label>{this.props.text}</label>
        <input type={this.props.inputType} placeholder={this.props.placeholder}/>
      </p>
    );
  }

}

Input.propTypes={
  text: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string.isRequired
}

export default Input ;
