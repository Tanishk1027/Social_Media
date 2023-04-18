import React from 'react';
import axios from 'axios';
import "./Request_card";

import { useSelector } from 'react-redux';

const Request_card = (props) => {

  const myState = useSelector((state)=>state.user);

    const handleAccept = async()=>{
        props.deleteRequest(props.track);
        try{
           await axios.post("http://localhost:5000/user/accept",{
              sender: props.username,
              recevier: myState
           });
        }catch(error){
           console.log(error);
        }
    }

    const handleDecline = async()=>{
        props.deleteRequest(props.track);
        try{
           await axios.post("http://localhost:5000/user/decline",{
            sender: props.username,
            recevier: myState
           });
        }catch(error){
           console.log(error);
        }
    }
  return (
    <div id='request_card'>
      <span>{props.username}</span>
      <button onClick={handleAccept}>Accept</button>
       <button onClick={handleDecline}>Decline</button>
    </div>
  )
}

export default Request_card;
