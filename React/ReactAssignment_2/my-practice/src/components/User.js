import React, { Component } from 'react';
import { withRedbull } from '../hoc';

const UserName = (props) => { 
    //console.log(props.count)    
    return (
        <div>
            <h3>{ props.count === 5 ? props.wings.idea : props.wings.info } I am here </h3>
            <h4>Count : { props.count }</h4>            
            <button onClick= { props.flyAway }>Click Me</button>           
            
        </div>
    );
}
const EnhancedUser = withRedbull(UserName);


class User extends Component {
    constructor(props)
    {
        super(props);        
    }
    

    render() { 
        //console.log(this.state.count)  
        let { people } = this.props;
        return (
        <div className="App">      
          <h1>{ people }</h1>          
          <EnhancedUser  />
        </div>
        );
    }
}

export default User;