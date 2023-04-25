import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import axios from "axios";
import {Link} from "react-router-dom";
import './PageCSS/login.scss';

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
    <div className='container'>
      <div className="heading">
        <h2>Send Request</h2>
      </div>
      <div className="input_element">
        <input type="text" placeholder='Search....' onChange={(e)=>{setusername(e.target.value)}}/>
      </div>
      <div className="buttons">
        <button onClick={handleSubmit}>Send Request</button>
      </div>
    </div>
  )
}

export default Send_request