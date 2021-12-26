import React from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";
import { GET_BLOCKCHAIN_DATA, GET_ACCOUNTS } from './constants/constants';

function App() {
  let navigate = useNavigate();

  const connectWallet = async () => {
    const [isConnected, payload] = await GET_BLOCKCHAIN_DATA()

    if (!isConnected) return

    sessionStorage.setItem('address', await GET_ACCOUNTS())
    navigate('/home')
  }

  return (
    <div className='container flex-center'>
      <h1 className='text-lg'>Welcome to <span className='color-span'>DapTube⚡️</span></h1>
      <h3>A decentralized video sharing platform</h3>
      <br />
      <div className='btn' onClick={connectWallet}>Connect your wallet</div>
      <div className='footer'>&copy;2021-2022 DapTube</div>
    </div>
  );
}

export default App;