import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import { CONTRACT_ABI } from '../abis/dapTube.abi'

export default function Home() {
    const [account, setAccount] = useState();
    const [dapTube, setDapTube] = useState();
    const [videos, setVideos] = useState([]);
    const [videoCount, setVideoCount] = useState(0);

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
                <h2>DapTube⚡️</h2>
                <p style={{ color: 'grey' }}>{account}</p>
            </header>

            <div className="poster-container">
                <div className="poster-item">
                    <img className='poster-img' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg" alt="" />
                    <div className="poster-text">
                        <div><b>The  Avengers</b></div><br />
                        <b>12mins</b>
                    </div>
                </div>
            </div>
        </main>
    );
}