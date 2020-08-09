import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => (    
    <div className="App">
        <h2>I am Main Page.</h2>
        <p><Link to="/RedBull">RedBull Assignment</Link></p>
        <p><Link to="/Counter">Counter Practice</Link></p>
        <p><Link to="/FirstComponent">First Component</Link></p>
    </div>       
);

export default Main;