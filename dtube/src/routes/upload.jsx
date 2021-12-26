import React, { useState, useEffect } from "react"

export default function Upload() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    const [address, setAddress] = useState(localStorage.getItem('address'))
    const videoTypes = [
        'video/mp4',
        'video/mkv',
    ]

    useEffect(() => {
        if (!address) {
            alert('Please login')
            window.history.back()
        }

        return () => { }
    }, [])

    const goBack = () => {
        window.history.back()
    }

    const convertFileToBuffer = (rawFile) => {
        let reader = new FileReader()

        reader.onload = () => {
            let buffer = new Uint8Array(reader.result)
            console.log(buffer)
            setFile(buffer)
        }

        reader.readAsArrayBuffer(rawFile)
    }

    const startUpload = () => {
        if (!file) {
            alert('choose a file')
            return
        }

        console.log('title', title)
        console.log('description', description)
        console.log('address', address)
        console.log('file', file)

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
                <div className="btn-filled" onClick={startUpload}>Start upload</div>
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
                        <input type='file' className='file-selector' onChange={(e) => { convertFileToBuffer(e.target.files[0]) }} accept='video/*' />
                    </div>
                    <div className="space-60"></div>
                    <div className='input-wrapper'>
                        <div><b>Select a thumbnail</b></div><br />
                        <input type='file' accept="image/*" className='file-selector' onChange={(e) => { convertFileToBuffer(e.target.files[0]) }} />
                    </div>
                </div>
            </div>

        </div>
    );
}