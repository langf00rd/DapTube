import React, { useEffect, useState } from 'react'
import './App.css'
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import Logo from './assets/logo.png'
import { GET_BLOCKCHAIN_DATA, GET_ACCOUNTS, MODAL_STYLE, CHECK_PREFS } from './constants/constants';


function App() {
  let navigate = useNavigate();

  useEffect(() => {

    const checkIsFirstTime = () => {
      let username = localStorage.getItem('username')
      let prefs = localStorage.getItem('prefs')

      if (!username || !prefs) {

        localStorage.setItem('prefs', 'Memes')
        localStorage.setItem('username', '')

        navigate('/welcome')
      }
    }

    checkIsFirstTime()
    return () => { }
  }, [])

  const connectWallet = async () => {
    const [isConnected, payload] = await GET_BLOCKCHAIN_DATA()

    if (!isConnected) return

    sessionStorage.setItem('address', await GET_ACCOUNTS())
    navigate('/home')
  }

  return (
    <div className='container flex-center-column'>
      <h1 className='text-lg'>Welcome to <span className='color-span'>
        <img src={Logo} className='logo-lg' />
      </span></h1>
      <h3>A decentralized video sharing platform</h3>
      <br />
      <div className='btn' onClick={connectWallet}>Connect your wallet</div>
      <div className='footer'>&copy;2021-2022 DapTube</div>
    </div>
  );
}

export default App;