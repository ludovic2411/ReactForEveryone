import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {


  render() {
    let admin=(<ul>
      {this.props.list.map(key=>(
        <li>{key.name} : {key.address.city}</li>
      )
    )}
    </ul>);

    if(this.props.admin){

      admin=(<ul>
        {this.props.list.map(key=>(
          <li>{key.name} : {key.email}, phone: {key.phone}</li>
        )
      )}
      </ul>
    );
  }


  return (
    <div>
      {admin}
    </div>
  );
}

}

List.propTypes={
  list:PropTypes.array,
  admin: PropTypes.boolean
}

export default List ;
