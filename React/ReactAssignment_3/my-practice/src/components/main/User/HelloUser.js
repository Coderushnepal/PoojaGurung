import React from 'react';
import '../App.css';
import User from './User';

class Userrr extends React.Component {  
  render() {    
    const peopleNames  = ["Pooja Gurung","Bisikha Subedi","Elisha Bista"];
    return (
      <div className="App">      
        { peopleNames.map((name, index) => (         
          <User  key= {index} people = { name }/>                         
          ))
        }        
       
      </div>
    );
  }
}

export default Userrr;