import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackHeader from "../components/BackHeader";
import Header from "../components/Header";
import { GET_BLOCKCHAIN_DATA, UPLOAD_TO_IPFS, CAPITALIZE_STRING } from '../constants/constants';

export default function Upload() {
    let navigate = useNavigate();

    const [address, setAddress] = useState(sessionStorage.getItem('address'))
    const [videoLength, setVideoLength] = useState('00:00:00')
    const [thumbnailBuffer, setThumbnailBuffer] = useState()
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [dapTubeData, setDapTubeData] = useState()
    const [videoBuffer, setVideoBuffer] = useState()
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')

    useEffect(() => {
        const initUploadPage = async () => {

            if (!sessionStorage.getItem('address')) {
                navigate('/')
                return
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

    const convertFileToBuffer = async (e, isVideo) => {
        const _file = e.target.files[0]

        if (_file) {

            const reader = new FileReader()
            if (isVideo) await getVideoMetadata(_file)

            reader.readAsArrayBuffer(_file)
            reader.onloadend = async () => {
                if (isVideo) setVideoBuffer(Buffer(reader.result))
                if (!isVideo) setThumbnailBuffer(Buffer(reader.result))
            }
        }
    }

    // const convertVideoToBuffer = (e) => {
    //     // console.log(e)
    //     convertFileToBuffer(e, true)
    // }

    // const convertThumbnailToBuffer = (e) => {
    //     // console.log(e.target.files)
    //     convertFileToBuffer(e, false)
    // }

    const saveThumbnailToIpfs = async () => {
        console.log('saving thumbnail')

        const [status, message, path] = await UPLOAD_TO_IPFS(thumbnailBuffer)
        if (!status) return [false]

        return [true, path]
    }

    const saveVideoToIpfs = async () => {
        console.log('saving video')

        const [status, message, path] = await UPLOAD_TO_IPFS(videoBuffer)
        if (!status) return [false]

        return [true, path]
    }

    const saveToBlockchain = (videoPath, thumbnailPath, dapTubeData, title, description, videoLength, tags, address) => {
        try {

            dapTubeData.methods.addVideo(
                `https://ipfs.infura.io/ipfs/${videoPath}`,
                `https://ipfs.infura.io/ipfs/${thumbnailPath}`,
                title,
                description,
                videoLength,
                tags
            ).send({ from: address }).on('transactionHash', hash => {

                setIsLoading(false)
                alert('video uploaded!🎉')
            })

        } catch (error) {

            alert('Could not complete upload')
            console.log(error)
        }
    }

    const uploadToIpfs = async () => {

        const formattedTags = []

        tags.split(',').forEach(tag => {
            formattedTags.push(CAPITALIZE_STRING(tag))
        })

        if (!videoBuffer) {
            alert('Choose a video')
            return
        }

        if (!thumbnailBuffer) {
            alert('Choose a thumbnail')
            return
        }

        setIsLoading(true)

        const [thumbnailSaved, thumbnailPath] = await saveThumbnailToIpfs()
        const [videoSaved, videoPath] = await saveVideoToIpfs()

        if (!videoSaved || !thumbnailSaved) {

            setIsLoading(false)
            alert('Could not upload either thumbnail or video')
            return
        }

        saveToBlockchain(videoPath, thumbnailPath, dapTubeData, title, description, videoLength, formattedTags.join(','), address)
        setIsLoading(false)
    }

    if (!isLoading) return (
        <div>
            <Header />
            <div style={{ padding: '20px', paddingTop: '0' }} className='flex-center'>
                <BackHeader title='Upload your video' />
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
                                <div type="text" className='text-input-2' ><p className='grey-text'>{address}</p></div>
                            </div>
                            <div className="space-40"></div>

                            <div className='input-wrapper'>
                                <div><b>Video tags</b></div>
                                <p className='grey-text'>Seaparate tags with a comma (,) with no spaces between</p><br />
                                <input type="text" className='text-input-2' onChange={(e) => { setTags(e.target.value) }} placeholder='eg Nature, Space, Technology' />
                            </div>
                        </div>

                        <div className="space-20"></div>

                        <div className="color-container">
                            <p>{videoLength}</p>

                            <div className='input-wrapper'>
                                <div><b>Choose video</b></div><br />
                                <input type='file' className='file-selector' onChange={(e) => convertFileToBuffer(e, true)} accept='video/*' />
                            </div>
                            <div className="space-20"></div>

                            <div className='input-wrapper'>
                                <div><b>Choose thumbnail</b></div><br />
                                <input type='file' className='file-selector' onChange={(e) => convertFileToBuffer(e, false)} accept='image/*' />
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