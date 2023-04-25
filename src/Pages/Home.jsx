import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Posts from '../components/posts';
import './PageCSS/home.scss';
// import user from '../../../api/models/user';


const Home = () => {

    const myState = JSON.parse(localStorage.getItem("user"));
    const {search} = useLocation();
    const [posts,setPosts] = useState([]);



    const handleLogout = ()=>{
      localStorage.setItem("user",null);
      // localStorage.clear();
      window.location.replace("/login");
    }
    useEffect(()=>{
      try{
      const fetchPosts = async ()=>{
       const res = await axios.post("http://localhost:5000/post/friends_posts",{
        user: myState
       })
       setPosts(res.data) 
       console.log(res.data);
      }
      fetchPosts();
    }catch(err){
      console.log(err);
    }
   },[search]);
    
  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="first">
          <button>
            <Link to="/sendRequest">Send requests</Link>
          </button>
          <button>
            <Link to="/Requests">Requests</Link>
          </button>
          <button><Link to="/Friends">Friends</Link></button>
          <button><Link to="/Write">Write Post</Link></button>
        </div>
        <div className="second">
          <div className="second-first">
            {myState[0]}
          </div>
          <div className="second-second">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
      <Posts posts = {posts}/>
    </div>
  
  )
}

export default Home
