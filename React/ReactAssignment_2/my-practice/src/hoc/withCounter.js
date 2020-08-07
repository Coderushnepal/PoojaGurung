import React from 'react';


const OrdinaryComponent = (props) => (  
   
     <div>
        <div> 
            <h1>Ordinary Component { props.title}</h1>            
        </div>     

        <div> <p> The Paragraph</p></div>
     </div>
   
);


const withCounter = (WrappedComponent) => {
   class CounterWrapper extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        msg : "Happy Assignment",
      }
    }

    render() {
      return  <WrappedComponent title= { this.state.msg }/>;
    }
   } 
   return CounterWrapper; 
};

const EnhancedComponent = withCounter(OrdinaryComponent);

export default EnhancedComponent;

