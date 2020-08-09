import React from 'react';
import { Link } from 'react-router-dom';

function MyFirstComponent() {
   return (
        <div className="App">  
            <h2>Happy Coding</h2>
            <p>Hello World</p> 
            <p>
          <Link to="/">Main</Link>
          </p>           
        </div>
    );
}

export default  MyFirstComponent;