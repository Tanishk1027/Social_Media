import React,{useEffect, useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

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
    <div>
      <input type="text" placeholder='usename' onChange={(e)=>{setusername(e.target.value)}}/> 
      <input type="password" placeholder='password' onChange={(e)=>{setpassword(e.target.value
        )}}/>
        <button onClick={handelSubmit}>Login</button>
        <button>
        <Link to="/">Home</Link>
        </button>
    </div>
  )
}

export default Login
