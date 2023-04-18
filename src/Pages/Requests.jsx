import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Request_card from '../components/Request_card';
import "./Requests.css"
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
      
const Requests = () => {
  const {search} = useLocation();
    const myState = JSON.parse(localStorage.getItem("user"));
    const [requests,setrequests] = useState([]);
    const arr = ["hello","world"];

    useEffect(()=>{

        const fetch = async()=>{
           const res = await axios.post("http://localhost:5000/user/all_request",{
            user: myState
           })
           setrequests(res.data.requests);
           window.alert(requests);
        }
        fetch(); 
    },[search])

    const delete_request = (track)=>{
        setrequests(prevRequests=>{
            return prevRequests.filter((items,index)=>{
               return index !==track
            })
        })
    }

    const Createcard = (data,index)=>{
        return(
        <Request_card
          track={index} 
          username ={data}
          deleteRequest={delete_request}
        />)
    }
  return (
    <div id='request_list'>
      {requests && requests.map(Createcard)} 
    </div>
  )
}

export default Requests
