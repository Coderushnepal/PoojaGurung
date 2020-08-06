import React from 'react';
import './Btn.css'; 
import Button from './Button';

class Counter extends React.Component {   
    constructor() {
        super();
          this.state = {
            count:0
        };
    }
      
    additionCount= () => {
        this.setState({ count: this.state.count+1 })
    }
      
    subtractionCount= () => {
        this.setState({ count: this.state.count-1 })
    }

    FindColor() {
        //console.log(this.props);
        const value = this.props.fellows.charAt(0).toLowerCase();
        console.log(value);
        return (value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u') ? true : false ;    
    }
     

    render() {
        let { fellows } = this.props;
        let { count }  = this.state;
        return (                
          <div className="box">
              <h1>Count : { count } </h1>      
                {/* <h2> </h2> */}

                <Button sign ={"+"} event ={ () => this.additionCount() } />
            
                <Button sign ={"-"} event ={ () => this.subtractionCount() } />

            <p className={ this.FindColor() ? 'red' : 'blue' }>{ fellows }</p>         
         </div>    
        );
    }
}


export default Counter;