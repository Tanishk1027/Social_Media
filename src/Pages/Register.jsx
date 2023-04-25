import React, { useState } from 'react';
import axios from "axios";
import './PageCSS/login.scss';

const Register = () => {
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");

    const handelSubmit = async()=>{
        try{
            const res = await axios.post("http://localhost:5000/auth/register",{
                username,
                password
            });
            console.log(res.data);
        }catch(error){
           console.log(error);
        }
    }

  return (
    <div className='container'>
      <div className="heading">
        <h2>Register</h2>
      </div>
      <div className="input_element">
        <input type="text" placeholder='username' onChange={(e)=>{setusername(e.target.value
          )}}/> 
      </div>
      <div className="input_element">
        <input type="text" placeholder='password' onChange={(e)=>{setpassword(e.target.value
          )}}/>
      </div>
      <div className="buttons">
        <button onClick={handelSubmit}>Register</button>  
      </div>
    </div>
  )
}

export default Register
