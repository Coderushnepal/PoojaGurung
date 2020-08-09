import React from 'react';
import { withUser } from '../hoc';
import { Link } from 'react-router-dom';

const OddComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h1> I am Odd  </h1>
        </div>
    )
};

const EvenComponent = () => (
    <div>
        <h1> I am even</h1>
    </div>
  
);

const EnhancedOddComponent = withUser(OddComponent);

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    };

    additionCount= () => {
        this.setState({ count: this.state.count+1 });
    };
      
    subtractionCount= () => {
        this.setState({ count: this.state.count-1 });
    };

    render() {
        return (
            <div className="App">
            <h1>Count : { this.state.count } </h1>      
            <h2>{ this.state.count % 2 ? <EnhancedOddComponent title="hello" srr="gert"/> : <EvenComponent /> }</h2>

            <button onClick={ this.additionCount }> + </button>
          
            <button onClick={ this.subtractionCount }> -</button>

            <p>
            <Link to="/">Main</Link>
             </p>
            </div>
        )

    };

}

export default Counter;