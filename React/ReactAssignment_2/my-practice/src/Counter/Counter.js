import React from 'react';
import { withUser } from '../hoc';


const OddComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h1> I am Odd { props.user.name} </h1>
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
            <div className="box">
            <h1>Count : { this.state.count } </h1>      
            <h2>{ this.state.count % 2 ? <EnhancedOddComponent title="hello" srr="gert"/> : <EvenComponent /> }</h2>

            <button onClick={ this.additionCount }> + </button>
          
            <button onClick={ this.subtractionCount }> -</button>
            </div>
        )

    };

}

export default Counter;