import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'

import { useSelector } from 'react-redux';

import {BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Send_request from './Pages/Send_request';
import Requests from './Pages/Requests';
import Friends from './Pages/Friends';
import Write from './Pages/Write';

const App = () => {

  const myState = JSON.parse(localStorage.getItem("user")) || null;
  return (
    <Router>
      <Switch>
        <Route exact path='/' element={myState ? <Home/> : <Login/>} />
        {/* <Route exact path='/' element={<Home/>} /> */}
        <Route path='/login' element={myState ?  <Home/> :<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/sendRequest' element={<Send_request/>}/>
        <Route path='/Requests' element={<Requests/>}/>
        <Route path='/Friends' element={<Friends/>}/>
        <Route path='/Write' element={<Write/>}/>
        </Switch>
    </Router>
  )
}

export default App