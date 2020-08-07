import React, { Component } from 'react';
import './first.css';

const FirstChild = (props) => {
    return (
        <div className="first">
            <p> { props.text } </p>
            <p> { props.res }</p>
        </div>
    )   
}

export default FirstChild;