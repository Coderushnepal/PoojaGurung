import { Link } from "react-router-dom";
import * as routes from '../../constants/routes';
import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchKeyword: ""
        }
    }

    handleSearchKeyword = (event) => {
        this.setState({ 
            searchKeyword : event.target.value
        })
    }

    search = (event) => {
        event.preventDefault();
        this.props.setSearchText(this.state.searchKeyword);
    }
   

    render() {
                
        return (
            <Fragment>
            <div className="header container clearfix">
                <div className="header-logo">
                  <h1>FavMovies</h1>
                </div>
                <div className="header-quotes right">
                  <span>Love <b>|</b> Share</span>
                  <p>Nepali Movies</p>
                </div>
            </div>
            <div className="intro-container">
                <div className="container clearfix">               
                    <div className="header-login-user clearfix">                       
                        <p><i className="far fa-user"></i>
                        Please 
                        <Link to={ routes.LOGIN} title="login">Login</Link> 
                        or 
                        <Link to={ routes.REGISTER} title="register">Register</Link> </p>                       
                    </div>
                    <div className="header-search-bar clearfix">
                        <form onSubmit={ this.search }>
                        <input 
                            value = { this.state.searchKeyword }
                            type="search" 
                            placeholder="Search The Movie Name"
                            onChange= { this.handleSearchKeyword }
                            > 
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
                        <li>
                            <Link to={routes.EXPLORE} title="explore">explore</Link>
                        </li>
                    </ul>
                </div>       
            </div>              
            </Fragment>
        )
    }
}

export default Header;