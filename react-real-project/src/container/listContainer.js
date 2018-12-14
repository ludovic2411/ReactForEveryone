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
    return (
      <div>
      <List list={this.state.list}/>
      </div>
    );
  }

}

export default ListContainer ;
