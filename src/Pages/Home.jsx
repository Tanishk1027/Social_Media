import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"


const Home = () => {

    const myState = JSON.parse(localStorage.getItem("user"));

    const handleLogout = ()=>{
      localStorage.setItem("user",null);
      // localStorage.clear();
      window.location.replace("/login");
    }
    
  return (
    <>
    <div>{myState} is the username</div>
    <button>
        <Link to="/sendRequest">Send requests</Link>
    </button>
    <button>
      <Link to="/Requests">Requests</Link>
    </button>
    <button><Link to="/Friends">Friends</Link></button>
    <button onClick={handleLogout}>Logout</button>
        </>
  )
}

export default Home
