import React, { Component } from 'react';
import Input from '../presentationnal/input';

class Form extends Component {

  render() {
    return (
      <div>
        <form>
        <Input text="Type below" inputType="text" placeholder="Type me"/>
        </form>
      </div>
    );
  }

}

export default Form;
