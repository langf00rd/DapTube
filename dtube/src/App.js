import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import './App.css'

function App() {
  const [account, setAccount] = useState();

  useEffect(() => {
    async function initApp() {
      await initWeb3()
      await loadBlockchainData()
    }

    initApp()
    return () => { }
  }, [])

  const initWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }

    else if (window.web3) window.web3 = new Web3(window.web3.currentProvider)
    else window.alert("Your browser doesn't support ethereum");
  }

  const loadBlockchainData = async () => {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()

    setAccount(accounts[0])
  }

  return (
    <div className='container'>
      <h1 className='text-lg'>Welcome to DappTube</h1>
      <a href='#' className='btn'>Connect wallet</a>
      <br />
      <br />
      <p>My account: <b>{account}</b></p>

      <div className='footer'>&copy;2021-2022 DappTube tech</div>
    </div>
  );
}

export default App;