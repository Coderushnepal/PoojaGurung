import React, { Component} from 'react';

const withUser = (WrappedComponent) => {
  class UserWrapper extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
       return <WrappedComponent {...this.props }/>;
    }
  }

 return UserWrapper;
}

export default withUser;