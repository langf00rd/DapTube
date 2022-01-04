import React, { useEffect, useState } from 'react'
import './App.css'
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import Logo from './assets/logo.png'
import { GET_BLOCKCHAIN_DATA, GET_ACCOUNTS, MODAL_STYLE, CHECK_PREFS } from './constants/constants';
import { getAccount } from 'simple-web3'
import { CONTRACT_ABI } from './abis/dapTube.abi'

function App() {
  let navigate = useNavigate();

  const connectWallet = async () => {
    let name = localStorage.getItem('username')
    let prefs = localStorage.getItem('prefs')

    if (!name || !prefs) {
      navigate('/edit')
      return
    }

    const account = await getAccount()

    if (!account.status) alert('Could not get account')

    sessionStorage.setItem('address', account.payload)

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