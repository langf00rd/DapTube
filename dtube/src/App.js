import React, { useEffect, useState } from 'react'
import './App.css'
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import Logo from './assets/logo.png'
import { GET_BLOCKCHAIN_DATA, GET_ACCOUNTS, MODAL_STYLE } from './constants/constants';


function App() {
  let navigate = useNavigate();
  // const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const checkIsFirstTime = () => {
      let username = localStorage.getItem('username')
      let prefs = localStorage.getItem('prefs')

      if (!username || !prefs) navigate('')
    }

    checkIsFirstTime()
    return () => { }
  }, [])

  // const openModal = () => { setIsOpen(true) }

  // const closeModal = () => { setIsOpen(false) }

  const connectWallet = async () => {
    const [isConnected, payload] = await GET_BLOCKCHAIN_DATA()

    if (!isConnected) return

    sessionStorage.setItem('address', await GET_ACCOUNTS())
    navigate('/home')
  }

  return (
    <div className='container flex-center-column'>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={MODAL_STYLE}
        contentLabel="Example Modal" >

        <div className='fullscreen'>

        </div>

      </Modal> */}


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