import React from 'react';
import FirstChild from './firstChild';

class ParentComponent extends React.Component {
    render() {
        return (
            <h2>Sajjan Raj Vaidya
            <FirstChild text="Hawajahajjj" res="Top Hit"/>
            <FirstChild text="AVB DFGT" res="Top hit Song" />
            </h2>
        )
    }
}


export default ParentComponent;