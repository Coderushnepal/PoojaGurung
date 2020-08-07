import React from 'react';
import './App.css';
import User from './components/User';
import ParentComponent from './parentComponent';
import EnhancedComponent from './hoc/withCounter';
import Counter from './Counter/Counter';


class App extends React.Component {  
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



export default App;
