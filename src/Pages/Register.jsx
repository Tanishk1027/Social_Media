import React, { useState } from 'react';
import axios from "axios";

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
    <div>
      <input type="text" placeholder='username' onChange={(e)=>{setusername(e.target.value
        )}}/> 
      <input type="text" placeholder='password' onChange={(e)=>{setpassword(e.target.value
        )}}/>
        <button onClick={handelSubmit}>Register</button>  
    </div>
  )
}

export default Register
