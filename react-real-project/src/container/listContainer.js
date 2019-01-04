import React, { Component } from 'react';
import axios from 'axios';
import List from '../presentationnal/list';


class ListContainer  extends Component {

  constructor(props) {
    super(props);
    this.state ={list:[]} ;
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const list = res.data;
      this.setState({ list });
    }).catch(error =>{
      console.log(error.message);
    })
  }

  render() {
    let componentList=(
      <List list={this.state.list} admin={false}/>
    );

    if(this.props.privileged){
      componentList=(
        <List list={this.state.list} admin={true}/>
      );
    }
    return(
      <div>
        {componentList}
      </div>
    );
  }

}

export default ListContainer ;
