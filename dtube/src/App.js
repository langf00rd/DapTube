import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import './App.css'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './config'

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

    const networkId = await web3.eth.net.getId()
    const networkData = CONTRACT_ABI.networks[networkId]
    // const networkData = CONTRACT_ABI.networks[5777].address

    if (networkData) {
      const dapTube = await new web3.eth.Contract(CONTRACT_ABI.abi, CONTRACT_ABI.networks[5777].address)
      console.log(dapTube.methods, networkId, CONTRACT_ABI.networks[5777].address)
    }

    else alert(`contract no deployed! ${networkData}`)


    // const c = await new web3.eth.Contract(CONTRACT_ABI.abi, CONTRACT_ABI.networks[networkId].address)

    // c.methods.addVideo('d', 'd').send({ from: account })
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