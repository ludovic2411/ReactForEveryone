import React, { Component } from 'react';
import Input from '../presentationnal/input';
import FormButton from '../presentationnal/button';

class authFormContainer extends Component {

  render() {
    return (
      <div>
        <form>
          <Input  text="Your name" inputType="text" placeholder="Your Name"/>
          <Input text="Your password" inputType="password" placeholder=""/>
          <FormButton buttonText="Log in" function={()=>{alert('click')}}/>
        </form>
      </div>
    );
  }

}

export default authFormContainer;
