import React from 'react';
import './Btn.css'; 

class Button extends React.Component {
    
    render() {
        let { event , sign } = this.props
        return (            
            <button className='btn' onClick = { event }>  { sign }  </button>             
        );
    }

}


export default Button;