import React, { Component } from 'react';
import Input from '../presentationnal/input';
import FormButton from '../presentationnal/button';
import ListContainer from './listContainer';

class authFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state ={login:"",
    password: "",
    isLoggin:false} ;
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
    if(this.state.login=="foo" && this.state.password=="bar"){

      this.setState({isLoggin:true});
    }
  }


  render() {
    if(!this.state.isLoggin){
      return (
        <div>
        <form>
        <Input text="Your name" inputType="text" placeholder="Your Name" handlerFromParent={this.handleLogin}/>
        <Input text="Your password" inputType="password" placeholder="" handlerFromParent={this.handlePassword}/>
        <FormButton buttonText="Log in" function={this.handleSubmit}/>
        </form>
        </div>
      );
    }else{
      return (
        <ListContainer privileged={true}/>
      );
    }
  }

}

export default authFormContainer;
