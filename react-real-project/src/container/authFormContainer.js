import React, { Component } from 'react';
import Input from '../presentationnal/input';
import FormButton from '../presentationnal/button';

class authFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state ={login:"empty",
    name: "unknown"} ;
    this.handleName=this.handleName.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }

  handleLogin(){
    this.setState({login:"updated"});
  }

  handleName(){
    this.setState({name:"anonymous"});
  }

  render() {
    return (
      <div>
        <form>
          <Input  text="Your name" inputType="text" placeholder="Your Name"/>
          <Input text="Your password" inputType="password" placeholder=""/>
          <FormButton buttonText="Log in" function={()=>{alert(this.state.name)}}/>
        </form>
      </div>
    );
  }

}

export default authFormContainer;
