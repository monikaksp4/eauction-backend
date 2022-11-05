import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import './Style.css'
import UserService from '../services/UserService';
import { Link} from 'react-router-dom';

const LoginComponent =()=>{
 const [state, setState]=useState({ error:'',
 loginId:'',
 password:''})
 const navigate = useNavigate();
   
  const  handleChange=(e)=>{
        setState({[e.target.name]:e.target.value});
    }
const cancel=(e)=>{
        e.preventDefault();
        navigate('/');
    }
   const login=(e)=>{
        e.preventDefault();
        navigate('/registration');
    }
  const  getLoginDetails=(e)=>{
        e.preventDefault();
        if(state.loginId!='' && state.password!=''){
            UserService.getLogin(state.loginId,state.password).then(response => {
           localStorage.setItem("loginId",state.loginId);
           navigate('/home');
       }).catch(err => { 
        setState({error:'Invalid username and password'});});
       }
        else{
            setState({error:'Please enter the fields'});
        }
    }
   
        return (
            <div>
           <HeaderComponent/>
           <div>
           <div className = "login">
            <h2 className="center">LOGIN</h2>
                                    <form>
                                    <div className = "form-group">
                                            <input  placeholder="Login Id" name="loginId" className="form-control"  
                                                value={state.loginId} onChange={handleChange}/>
                                        </div>
                                         <div className = "form-group">
                                            <input type="password" placeholder="Password" name="password" className="form-control" 
                                            value={state.password} onChange={handleChange}/>
                                        </div>
                                     <div className = "form-group">
                                        <span className="error">{state.error}</span>
                                         </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        
                                        <button className="btn btn-success" onClick={getLoginDetails}>Login</button>
                                        <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span> <a href='' onClick={login}>New User?Register</a></span><br/>
                                        <div className="center"> <Link to="/forgetPassword">Forget Password</Link ></div>
                                       
                                         </form>
                                </div></div>
                                
           </div>
        )
    }


export default  LoginComponent;
