import React, { useEffect, useState } from 'react'
import Friend_card from '../components/Friend_card'
import axios  from 'axios';
import { useLocation } from 'react-router-dom';

const Friends = () => {

    const {search} = useLocation();

    const myState = JSON.parse(localStorage.getItem("user"));

    const [friends,setfriends] = useState([]);
    const Createcard = (data,index)=>{
        return(
        <Friend_card
           track = {index}
           username={data}
        />)
    }

    useEffect(async()=>{
        const fetch = async()=>{
            const res = await axios.post("http://localhost:5000/user/all_friends",{
             user: myState
            })
            setfriends(res.data.friends);
            // window.alert(friends);
         }   
         fetch();
    },[search]);

  return (
    <div>
      {friends && friends.map(Createcard)}
    </div>
  )
}

export default Friends
