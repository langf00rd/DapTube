import React from 'react'
import './App.css'
import { Link } from "react-router-dom";


function App() {
  return (
    <div className='container flex-center'>
      <h1 className='text-lg'>Welcome to <span className='color-span'>DapTube⚡️</span></h1>
      <Link to="/home" className='btn'>Connect your wallet</Link>
      <div className='footer'>&copy;2021-2022 DapTube</div>
    </div>
  );
}

export default App;