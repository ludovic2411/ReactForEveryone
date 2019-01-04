import React, { Component } from 'react';
import Input from '../presentationnal/input';
import FormButton from '../presentationnal/button';

class authFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state ={login:"",
    password: ""} ;
    this.handleLogin=this.handleLogin.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleLogin(data){
    this.setState({login:data});
  }

  handlePassword(data){
    this.setState({password:data});
  }

  handleSubmit(event){
    event.preventDefault();
    alert(this.state.password)
  }


  render() {
    return (
      <div>
        <form>
          <Input text="Your name" inputType="text" placeholder="Your Name" handlerFromParent={this.handleLogin}/>
          <Input text="Your password" inputType="password" placeholder="" handlerFromParent={this.handlePassword}/>
          <FormButton buttonText="Log in" function={this.handleSubmit}/>
        </form>
      </div>
    );
  }

}

export default authFormContainer;
