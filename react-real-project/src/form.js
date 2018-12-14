import React, { Component } from 'react';

export default class formContainer extends Component{

  constructor(props) {
    super(props);
    this.state ={title:""} ;
  }

  render(){
    return(
      <form id="article-form">
      </form>
    );
  }
}
