import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormButton extends Component {

  render() {
    return (
      <p><button value="submit" onClick={this.props.function}>{this.props.buttonText}</button></p>
    );
  }


}

FormButton.propTypes={
  buttonText: PropTypes.string.isRequired,
  function:PropTypes.func
}

export default FormButton;
