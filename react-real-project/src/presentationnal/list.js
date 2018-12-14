import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {

  render() {
    return (
      <div>
      <ul>
      {this.props.list.map(key=>(
        <li>{key.name} : {key.address.city}</li>
      )
    )}
    </ul>
    </div>
  );
}

}

List.propTypes={
  list:PropTypes.array
}

export default List ;
