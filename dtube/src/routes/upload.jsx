import React, { useState, useEffect } from "react";
import { GET_BLOCKCHAIN_DATA, GENERATE_BUFFER_FROM_FILE, IPFS } from '../constants/constants';

export default function Upload() {

    const [dapTubeData, setDapTubeData] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    const [address, setAddress] = useState(sessionStorage.getItem('address'))
    const videoTypes = [
        'video/mp4',
        'video/mkv',
    ]

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

    const goBack = () => window.history.back()

    const convertFileToBuffer = async (e) => {

        const _file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsArrayBuffer(_file)

        reader.onloadend = async () => {
            console.log(Buffer(reader.result))
            setFile(Buffer(reader.result))
        }
    }

    const saveToBlockchain = (fileHash) => {
        console.log(`https://ipfs.infura.io/ipfs/${fileHash}`, title, address)

        dapTubeData.methods.addVideo(`https://ipfs.infura.io/ipfs/${fileHash}`, title).send({ from: address }).on('transactionHash', hash => {
            console.log('video uploaded!🎉')
        })
    }

    const uploadToIpfs = async (e) => {
        if (!file) {
            alert('choose a file')
            return
        }

        try {
            const uploadedFile = await IPFS.add(file)
            saveToBlockchain(uploadedFile.path)
            // saveToBlockchain('QmXzX8GMHdGwhR8BgKBayXBG2eZjfCN3AB8nZgTKNNVg7Z')
        }

        catch (error) {
            console.log(error)
        }

        console.log('done!')

        //check file type before upload
    }

    return (
        <div className='pd-container '>
            <div className="flex back-button" onClick={goBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                <b>back</b>
            </div>
            <div className="flex-between">
                <h1>Upload your video</h1>
                <div className="btn-filled" onClick={uploadToIpfs}>Start upload</div>
            </div>
            <div className="space-20"></div>

            <div className="flex-between">
                <div className="color-container">
                    <div className='input-wrapper'>
                        <div><b>Video title</b></div><br />
                        <input type="text" className='text-input-2' onChange={(e) => { setTitle(e.target.value) }} placeholder='My cat video' />
                    </div>
                    <div className="space-60"></div>

                    <div className='input-wrapper'>
                        <div><b>Description</b></div><br />
                        <textarea className='text-input-2' placeholder='My video is cool' onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    </div>
                    <div className="space-60"></div>

                    <div className='input-wrapper'>
                        <div><b>Wallet address</b></div>
                        <p className='grey-text'>This is the wallet address where you will receive funds from your viewers.</p><br />
                        <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} className='text-input-2' />
                    </div>
                </div>

                <div className="color-container">
                    <div className='input-wrapper'>
                        <div><b>Choose video</b></div><br />
                        {/* <input type='file' className='file-selector' onChange={async (e) => convertFileToBuffer(e)} /> */}
                        <input type='file' className='file-selector' onChange={async (e) => convertFileToBuffer(e)} accept='video/*' />
                    </div>
                    {/* <div className="space-60"></div>
                    <div className='input-wrapper'>
                        <div><b>Select a thumbnail</b></div><br />
                        <input type='file' accept="image/*" className='file-selector' onChange={(e) => { setFile(GENERATE_BUFFER_FROM_FILE(e.target.files[0])) }} />
                    </div> */}
                </div>
            </div>
        </div>
    );
}