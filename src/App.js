import React from 'react';
import './App.css';
import Home from './components/Home';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';
function App() {
  return (

    


    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} >  </Route>
        <Route path="/detail" element={<Detail/>} > </Route>
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;

