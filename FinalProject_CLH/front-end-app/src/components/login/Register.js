import React, { Fragment } from 'react';
import { Header } from '../common';
import axios from 'axios';
import * as routes from '../../constants/routes';



const Register = ({ history}) => {

    const register = () => {        
        history.push(routes.HOME);        
    }
    return (
        <Fragment>
          <Header />
          <div className="container-login">
            <form className="register-form" onSubmit={ (e) => RegisterApp(e)}>
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" id="user_name" required/>
                

                <label><b>Email</b></label>
                <input type="text" placeholder="Enter Email" id="input_email" required/>

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="input_password" required/>
                    
                <button className="btn-secondary" type="submit" onClick={ register } >Register</button>       
            </form> 
        
          </div>
        </Fragment>
    )
    
};

function RegisterApp(e) {
  e.preventDefault();

  axios( {method: "post", url: "register" , data : { 
      userName: document.getElementById("user_name").value,
      email: document.getElementById("input_email").value,
      password: document.getElementById("input_password").value
  }} )
  .then(res =>
      {
          alert(res.data.message);
      })
  .catch(err => {console.log(err);
      alert("Invalid credentials")});    
}

export default Register;