import React, { useState, useEffect } from "react";
import BackHeader from "../components/BackHeader";
import Header from "../components/Header";
import { GET_BLOCKCHAIN_DATA, IPFS } from '../constants/constants';

export default function Upload() {

    const [isLoading, setIsLoading] = useState(false)
    const [dapTubeData, setDapTubeData] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    const [videoLength, setVideoLength] = useState('00:00:00')
    const [address, setAddress] = useState(sessionStorage.getItem('address'))

    useEffect(() => {
        const initUploadPage = async () => {
            if (!address) {
                alert('Please login')
                window.history.back()
            }

            const [isConnected, payload] = await GET_BLOCKCHAIN_DATA()
            if (!isConnected) alert('could not connect to web3 😔')
            setDapTubeData(payload)
        }

        initUploadPage()
        return () => { }
    }, [])

    const getVideoMetadata = async (file) => {
        var format = require('format-duration')
        var video = document.createElement('video');

        video.preload = 'metadata';
        video.onloadedmetadata = function () {
            window.URL.revokeObjectURL(video.src);

            if (video.duration < 1) {
                alert('video too short. choose a new video')
                return
            }

            let timeInMilliseconds = (video.duration).toFixed(0) * 1000
            setVideoLength(format(timeInMilliseconds))
        }

        video.src = URL.createObjectURL(file);
    }

    const convertFileToBuffer = async (e) => {

        const _file = e.target.files[0]
        const reader = new FileReader()

        await getVideoMetadata(_file)

        reader.readAsArrayBuffer(_file)

        reader.onloadend = async () => {
            console.log(Buffer(reader.result))
            setFile(Buffer(reader.result))
        }
    }

    const saveToBlockchain = (fileHash) => {
        console.log(`https://ipfs.infura.io/ipfs/${fileHash}`, title, address)

        dapTubeData.methods.addVideo(
            `https://ipfs.infura.io/ipfs/${fileHash}`,
            title,
            description,
            videoLength,
        ).send({ from: address }).on('transactionHash', hash => {
            setIsLoading(false)
            alert('video uploaded!🎉')
        })
    }

    const uploadToIpfs = async (e) => {
        if (!file) {
            alert('choose a file')
            return
        }

        try {

            setIsLoading(true)
            const uploadedFile = await IPFS.add(file)
            saveToBlockchain(uploadedFile.path)

        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }

        console.log('done!')
    }

    if (!isLoading) return (
        <div>
            <Header />
            <BackHeader title='Upload your video' />
            <div style={{ padding: '20px', paddingTop: '0' }} className='flex-center'>
                <div>
                    <div className="flex-between-top">
                        <div className="color-container">
                            <div className='input-wrapper'>
                                <div><b>Video title</b></div><br />
                                <input type="text" className='text-input-2' onChange={(e) => { setTitle(e.target.value) }} placeholder='My cat video' />
                            </div>
                            <div className="space-40"></div>

                            <div className='input-wrapper'>
                                <div><b>Description</b></div><br />
                                <textarea className='text-input-2' placeholder='My video is cool' onChange={(e) => { setDescription(e.target.value) }}></textarea>
                            </div>
                            <div className="space-40"></div>

                            <div className='input-wrapper'>
                                <div><b>Wallet address</b></div>
                                <p className='grey-text'>This is the wallet address where you will receive funds from your viewers.</p><br />
                                <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} className='text-input-2' />
                            </div>
                        </div>

                        <div className="space-20"></div>

                        <div className="color-container">
                            <p>{videoLength}</p>
                            <div className='input-wrapper'>
                                <div><b>Choose video</b></div><br />
                                <input type='file' className='file-selector' onChange={async (e) => convertFileToBuffer(e)} accept='video/*' />
                            </div>
                            <div className="space-20"></div>
                            <div className="btn-filled" onClick={uploadToIpfs}>Start upload</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    else return (
        <div>
            <Header />
            <div className="fullscreen flex-center">
                <h2>Video uploading ...</h2>
                <p>Do not leave this screen else upload will be cancelled</p>
            </div>
        </div>
    );
}