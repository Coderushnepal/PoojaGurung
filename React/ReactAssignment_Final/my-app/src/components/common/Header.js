import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as routes from '../../constants/routes';

class Header extends Component { 
  constructor(props){
    super(props);

    this.state ={
      searchWord: "",
    }
  }

  handleSearchKeyword = (event) => {
    this.setState({ searchWord : event.target.value})
  }

  search = (event) => {
    event.preventDefault();
    this.props.setSearchText(this.state.searchWord);
}
  


  render() {
    // console.log(this.state.searchWord)
    return (
    <div className="header">
      <div className="main-header container clearfix">
        <div className="header-title">
         <h1>FavNMovie</h1>
        </div>        
        <div className="header-quotes">
          <span>Love <b>|</b> Share</span>
          <p>Nepali Movies</p>
        </div>       
      </div>  
      <div className="header-body">
        <div className="container clearfix">
           <div className="intro-container">
               <div className="header-login-user">
                  <p><i className="fas fa-user"></i>
                  Please <a href="#">Login</a> or <a href="#">Register</a></p>
               </div>
               <div className="header-search-bar">
                   <form onSubmit= { this.search }>
                      <input 
                        type="search" 
                        placeholder="Search The Movie Name"
                        value={this.state.searchWord}
                        onChange={ this.handleSearchKeyword }> 
                      </input>
                   </form>
               </div>               
           </div>
           <div className="header-navbar">
                <ul>
                  <li>
                    <Link to={ routes.HOME} className="active" title="home">home</Link>
                  </li>
                  <li>
                    <Link to={routes.FAVORITES} title="favorites">favorites</Link>
                  </li>
                </ul>
            </div>
        </div>      
      </div>    
    </div>
  )}  
};

export default Header;