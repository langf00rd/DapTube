import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Web3 from 'web3'
import { CONTRACT_ABI } from '../abis/dapTube.abi'

export default function Home() {
    const [account, setAccount] = useState(localStorage.getItem('address'));
    const [dapTube, setDapTube] = useState();
    const [videos, setVideos] = useState([]);
    const [videoCount, setVideoCount] = useState(0);

    async function initApp() {
        await initWeb3()
        await loadBlockchainData()
    }

    const initWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }

        else if (window.web3) window.web3 = new Web3(window.web3.currentProvider)
        else window.alert("Your browser doesn't support ethereum! 😔")
    }

    const loadBlockchainData = async () => {

        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        const networkId = await web3.eth.net.getId()
        const networkInfo = CONTRACT_ABI.networks[networkId]

        if (networkInfo) {

            console.log('successfully connected to network! 🎉')

            const dapTubeData = await new web3.eth.Contract(CONTRACT_ABI.abi, networkInfo.address)
            const dapTubeVideoCount = await dapTubeData.methods.videoCount().call()

            localStorage.setItem('address', accounts[0])
            setAccount(accounts[0])
            setDapTube(dapTubeData)
            setVideoCount(dapTubeVideoCount)

            for (let i = dapTubeVideoCount; i >= 1; i--) {
                const currentVideo = await dapTubeData.methods.videos(i).call()
                console.log('videosList:', currentVideo)

                setVideos([...videos, currentVideo])
            }
        }

        else alert(`contract not deployed! 😔`)

        // const c = await new web3.eth.Contract(CONTRACT_ABI.abi, CONTRACT_ABI.networks[networkId].address)
        // c.methods.addVideo('d', 'd').send({ from: account })
    }

    return (
        <main>
            <header>
                <div className="header-wrapper flex-between">
                    <h2>DapTube⚡️</h2>
                    <input type="text" className="search-box" placeholder='Search for video' />
                    <div className="flex-between">
                        <div className="space-20"></div>
                        {
                            account
                                ? <Link to="/upload" className="btn-filled">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                                    Upload video
                                </Link>
                                : <a href="#" className="btn-filled " onClick={initApp}>Sign in</a>
                        }
                    </div>
                </div>
            </header>

            <div className="poster-container">
                <div className="poster-item">
                    <img className='poster-img' src="https://cfvod.kaltura.com/p/1926081/sp/192608100/thumbnail/entry_id/1_48193rbm/version/100001/width/372/height/209" alt="" />
                    <div className="poster-text">
                        <div><small className='poster-title'>The Avengers - Age Of Ultron is nearly over</small></div>
                        <div><small className='post-time'>12:03</small></div>
                    </div>
                </div>
            </div>
        </main>
    );
}