import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import axios from "axios";
import {Link} from "react-router-dom";

const Send_request = () => {
  const myState = JSON.parse(localStorage.getItem("user"));
    const [username,setusername] = useState("");
    
    const handleSubmit = async()=>{
        try{
            await axios.post("http://localhost:5000/user/request",{
              sender: myState,
              recevier: username
          })  
        }catch(error){
          console.log(error);
        }
    }

  return (
    <div>
      <input type="text" onChange={(e)=>{setusername(e.target.value)}}/>
      <button onClick={handleSubmit}>Send Request</button>
    </div>
  )
}

export default Send_request