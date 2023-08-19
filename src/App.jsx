import { useState } from 'react'
import './App.css'
import {Link, Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
      <Footer></Footer>
      

    </>
  )
}

export default App;
