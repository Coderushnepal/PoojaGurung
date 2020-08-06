import React from 'react';
import './App.css';

import Counter from './Counter';


class App extends React.Component {  
  render() {
    
    const fellowNames  = ["Pooja Gurung","Bisikha Subedi","Elisha Bista","Sindhu Aryal","Kirtee Maharjan","Kusum Ranjitkar","Kirtika Baral"];
      
    return (
      <div className="App">      
      
        { fellowNames.map((name, index) => (         
            <Counter  key= {index} fellows = { name }/>
                         
          ))
        }        

      </div>
    );
  }
}

export default App;



