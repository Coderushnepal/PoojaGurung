import React, { Component } from 'react';

const withRedbull = (WrappedComponent) => {
    class UserWrapper extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                wings: {                    
                    info: "Hello Guys",
                    idea: "Happy Coding", 
                                       
                }
            }
        }
    
        flyAway = () => {
          this.setState({ count: this.state.count + 1});
        }    
    
        render() {
            return <WrappedComponent wings={ this.state.wings } count={ this.state.count } flyAway={ this.flyAway } />
        }
    }
    return UserWrapper;
}

export default withRedbull;