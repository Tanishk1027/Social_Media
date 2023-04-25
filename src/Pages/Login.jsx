import React,{useEffect, useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import './PageCSS/login.scss';

import {useSelector,useDispatch} from "react-redux"

import { Login_start,Login_success} from '../actions';

const Login = () => {

    const myState = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [click,setclick] = useState(0);

    useEffect(()=>{
      
    },[click])

    const handelSubmit = async()=>{
        
        dispatch((Login_start()));
        try{
          await axios.post("http://localhost:5000/auth/login",{
               username : username,
               password
          })
          dispatch(Login_success(username));
          setclick(click+1);
          localStorage.setItem("user",JSON.stringify(username));
          window.location.replace("/")
        }catch(error){
          console.log(error);
        } 
    }

  return (
    <div className='container'>
      <div className="heading">
        <h2>Login</h2>
      </div>
      <div className="input_element">
        <input type="text" placeholder='username' onChange={(e)=>{setusername(e.target.value)}}/> 
      </div>
      <div className="input_element">
        <input type="password" placeholder='password' onChange={(e)=>{setpassword(e.target.value
          )}}/>
      </div>
      <div className="buttons">
        <button onClick={handelSubmit}>Login</button>
        <button>
        <Link to="/" className='btn-link'>Home</Link>
        </button>
      </div>
    </div>
  )
}

export default Login
