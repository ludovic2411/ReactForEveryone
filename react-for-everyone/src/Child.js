import React, { Component } from 'react';
import PropTypes from 'prop-types';
 class Foo extends Component {
   constructor(props) {
     super(props);
     this.state = {counter:1};
     this.addCount=this.addCount.bind(this);
   }

   addCount(e){
     e.preventDefault();
     this.setState(state => ({counter:state.counter+1}));
   }
  render() {
    let greeting="world";
    if(this.props.isPerson){
      greeting=(<p>Made by {this.props.author}</p>);
    }
    return(
      <div>
        <h2>I am a child component!</h2>
        {greeting}
        <p onClick={this.addCount}>{this.state.counter}</p>
      </div>
    )
  }
}

Foo.defaultProps={
  author:"someone"
};

Foo.propTypes={
  author:PropTypes.string.isRequired,
  isPerson:PropTypes.bool
};
export default Foo;
