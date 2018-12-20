import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input  extends Component {

  render() {
    return (
      <div>
        <p><label>{this.props.text}</label></p>
        <p><input type={this.props.inputType} placeholder={this.props.placeholder}/></p>
      </div>
    );
  }

}

Input.propTypes={
  text: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default Input ;
