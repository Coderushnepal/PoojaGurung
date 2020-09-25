import { Link } from "react-router-dom";
import React, { Fragment } from 'react';
import { Header } from '../common';
import axios from 'axios';
import * as routes from '../../constants/routes';
//import history from '../../utils/history';

const Login = ({ history }) => {

    const logIn = () => {        
        history.push(routes.HOME);        
    }


    return (
        <Fragment>
          <Header />
          <div className="container-login">
            <form className="login-form" onSubmit={(e) => loginApp(e)}>
                <div className="center-form">
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter Email" id="user_email" autoComplete="off" required/>

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="user_password" autoComplete="off" required/>
                    
                <button className="btn-secondary" type="submit" onClick={logIn}>Login</button>              


                <div className="forgot-label">               
                <span className="psw">Forgot <Link to="#">password?</Link></span>
                </div>
                </div>
            </form> 
        
          </div>
        </Fragment>
    )    
};

function loginApp(e) {
    e.preventDefault();

     const data = { 
        email: document.getElementById("user_email").value,
        password: document.getElementById("user_password").value
    }

    axios( {method: "post", url: "login" , data } )
    .then(res =>
        {
            alert(res.data.message);
            
        })
    .catch(err => {console.log(err);
        alert("Invalid login credentials")});    
}

export default Login;