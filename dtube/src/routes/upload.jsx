import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackHeader from "../components/BackHeader";
import Header from "../components/Header";
import Modal from 'react-modal';
import { GET_BLOCKCHAIN_DATA, UPLOAD_TO_IPFS, CAPITALIZE_STRING, MODAL_STYLE } from '../constants/constants';

export default function Upload() {
    let navigate = useNavigate();
    const videoUploadRef = useRef(null);
    const thumbnailUploadRef = useRef(null);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [isVideoSelected, setIsVideoSelected] = useState(false);
    const [isThumbnailSelected, setIsThumbnailSelected] = useState(false);

    const [address, setAddress] = useState(sessionStorage.getItem('address'))
    const [videoLength, setVideoLength] = useState('00:00:00')
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [dapTubeData, setDapTubeData] = useState()
    const [videoBuffer, setVideoBuffer] = useState()
    const [thumbnailBuffer, setThumbnailBuffer] = useState()
    const [title, setTitle] = useState()
    const [tags, setTags] = useState()

    const [thumbnailPreview, setThumbnailPreview] = useState()
    const [selectedVideo, setSelectedVideo] = useState({ name: '', size: 0 })


    useEffect(() => {
        const initUploadPage = async () => {

            openModal()

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

    const openModal = () => { setIsOpen(true); }

    const closeModal = () => {

        if (thumbnailBuffer && videoBuffer) setIsOpen(false);
    }

    const chooseVideo = () => {
        videoUploadRef.current.click();
    }

    const chooseThumbnail = () => {
        thumbnailUploadRef.current.click();
    }

    // const getVideoMetadata = async (file) => {
    //     var format = require('format-duration')
    //     var video = document.createElement('video');

    //     video.preload = 'metadata';
    //     video.onloadedmetadata = function () {
    //         window.URL.revokeObjectURL(video.src);

    //         if (video.duration < 1) {
    //             alert('video too short. choose a new video')
    //             return
    //         }

    //         let timeInMilliseconds = (video.duration).toFixed(0) * 1000

    //         setVideoLength(format(timeInMilliseconds))
    //     }

    //     video.src = URL.createObjectURL(file);
    // }

    const convertFileToBuffer = async (e, isVideo) => {
        const _file = e.target.files[0]
        console.log(_file)

        if (_file) {

            const reader = new FileReader()

            if (!isVideo) {
                setIsThumbnailSelected(true)
                setThumbnailPreview(URL.createObjectURL(_file))
            }

            if (isVideo) setSelectedVideo(_file)

            // if (isVideo) await getVideoMetadata(_file)

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

    const saveToBlockchain = async (videoPath, thumbnailPath, dapTubeData, title, description, videoLength, tags, timestamp, address) => {
        try {

            dapTubeData.methods.addVideo(
                `https://ipfs.infura.io/ipfs/${videoPath}`,
                `https://ipfs.infura.io/ipfs/${thumbnailPath}`,
                title,
                description,
                // videoLength,
                tags,
                timestamp
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

        if (!videoBuffer) {
            alert('Choose a video')
            return
        }

        if (!thumbnailBuffer) {
            alert('Choose a thumbnail')
            return
        }

        if (!tags) {
            alert('Add at least 1 video tag')
            return
        }

        if (!title) {
            alert('Add a video title')
            return
        }

        setIsLoading(true)

        tags.split(',').forEach(tag => {
            formattedTags.push(CAPITALIZE_STRING(tag))
        })


        const [thumbnailSaved, thumbnailPath] = await saveThumbnailToIpfs()
        const [videoSaved, videoPath] = await saveVideoToIpfs()

        if (!videoSaved || !thumbnailSaved) {

            setIsLoading(false)
            alert('Could not upload either thumbnail or video')
            return
        }

        await saveToBlockchain(videoPath, thumbnailPath, dapTubeData, title, description, videoLength, formattedTags.join(','), Date().substr(4, 17), address)
        clearFields()

    }

    const clearFields = () => {
        setThumbnailBuffer()
        setVideoBuffer()
        setTags()
        setDescription()
        setIsThumbnailSelected(false)
        setSelectedVideo({ name: '', size: 0 })
        setThumbnailPreview()
    }

    if (!isLoading) return (
        <div>
            <Header />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={MODAL_STYLE}
                contentLabel="Example Modal" >

                <div className="video-upload-modal">

                    <div className="flex-between">
                        <h1>Video &amp; thumbnail</h1>
                        <div className="btn-filled fade-filled" onClick={closeModal}>Next</div>
                    </div>

                    <div className="space-20"></div>

                    <input ref={videoUploadRef} style={{ display: 'none' }} type='file' onChange={(e) => convertFileToBuffer(e, true)} accept='video/*' />
                    <input ref={thumbnailUploadRef} style={{ display: 'none' }} type='file' onChange={(e) => convertFileToBuffer(e, false)} accept='image/*' />


                    <div className="flex-center">
                        <div className='file-selector' onClick={chooseVideo}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 16c0 1.104-.896 2-2 2h-12c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8zm8-10l-6 4.223v3.554l6 4.223v-12z" /></svg>
                            <p className='grey-text'>Choose video</p>
                        </div>
                        <div className="space-20"></div>
                        <div className='file-selector' onClick={chooseThumbnail}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" /></svg>
                            <p className='grey-text'>Thumbnail</p>
                        </div>
                    </div>

                    <div className="space-20"></div>

                    <p>{selectedVideo.name}</p>
                    <p>{selectedVideo.size > 0 ? `Size: ${(selectedVideo.size / (1024 * 1024)).toFixed(2)} Mb` : null}</p>

                    <div className="space-20"></div>

                    {
                        isThumbnailSelected ?
                            <img src={thumbnailPreview} className='thumbnail-preview' />
                            : null
                    }

                </div>

            </Modal>

            <main>
                <div className='under-header'>

                    <div className="upload-container">

                        <div className="flex-between">
                            <h2>Video &amp; Thumbnail</h2>
                            <div className="btn-filled fade-filled" onClick={uploadToIpfs}>Start upload</div>
                        </div>

                        <div className="text-btn" onClick={() => setIsOpen(true)}>Change video or thumbnail</div>
                        <div className="space-20"></div>
                        <div className="space-20"></div>

                        <div className='input-wrapper'>
                            <div><b>Title (required)</b></div><br />
                            <input type="text" className='text-input-2' onChange={(e) => { setTitle(e.target.value) }} placeholder='Add a title that describes your video' />
                        </div>
                        <div className="space-40"></div>

                        <div className='input-wrapper'>
                            <div><b>Description</b></div><br />
                            <textarea className='text-input-2' placeholder='Tell viewers about your video' onChange={(e) => { setDescription(e.target.value) }}></textarea>
                        </div>
                        <div className="space-40"></div>


                        <div className='input-wrapper'>
                            <div><b>Video tags (required)</b></div>
                            <p className='grey-text'>Seaparate tags with a comma (,) with no spaces between</p><br />
                            <input type="text" className='text-input-2' onChange={(e) => { setTags(e.target.value) }} placeholder='eg Nature, Space, Technology' />
                        </div>
                        <div className="space-40"></div>

                        <div className='input-wrapper'>
                            <div><b>Wallet address</b></div>
                            <p className='grey-text'>This is the wallet address where you will receive funds from your viewers.</p><br />
                            <div type="text" className='text-input-2' ><p className='grey-text'>{address}</p></div>
                        </div>
                    </div>

                    <div className="space-60"></div>
                </div>
            </main>
        </div>
    );

    else return (
        <div>
            <Header />
            <div className="fullscreen flex-center-column">
                <h2>Video uploading ...</h2>
                <p>Do not leave this screen else upload will be cancelled</p>
            </div>
        </div>
    );
}