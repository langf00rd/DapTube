import React, { useEffect, useState } from "react";
import { GET_ROUTE_PARAM, GET_SIMILAR_VIDEOS, GET_VIDEO_BY_ID, MODAL_STYLE } from "../constants/constants";
import Header from "../components/Header";
import PosterCard from "../components/PosterCard";
import { useLocation, useNavigate } from 'react-router-dom';
import EmptyState from '../assets/e.png'
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';
import Modal from 'react-modal';
import TagsHeader from "../components/TagsHeader";

export default function Watch() {
    const location = useLocation();
    let navigate = useNavigate()

    const [modalIsOpen, setIsOpen] = useState(false);
    const [videoExist, setVideoExist] = useState(true)
    const [amount, setAmount] = useState()
    const [amountInEthers, setAmountInEthers] = useState(0.00)
    const [avatar, setAvatar] = useState()
    const [videos, setVideos] = useState([])
    const [currentVideo, setCurrentVideo] = useState({})

    const openModal = () => { setIsOpen(true); }

    const closeModal = () => { setIsOpen(false); }

    useEffect(() => {

        const initPage = async () => {

            let thisVideo;

            if (!await GET_VIDEO_BY_ID(GET_ROUTE_PARAM())) {
                setVideoExist(false)
                setCurrentVideo({})
                return
            }

            let svg = createAvatar(style, { seed: (Date.now() + Math.random() * 1000).toString() });
            setAvatar(svg)

            thisVideo = await GET_VIDEO_BY_ID(GET_ROUTE_PARAM())

            setCurrentVideo(thisVideo)
            setVideoExist(true)

            getSimilarVideos(thisVideo)

        }

        initPage()
        return () => { }

    }, [location])

    const getSimilarVideos = async (thisVideo) => {

        setVideos(await GET_SIMILAR_VIDEOS(thisVideo.tags.split(',')))
    }

    const viewTag = (tag) => { navigate(`/tag?${tag}`) }

    const sponsorCreator = () => {
        console.log(amount)
    }

    const convertAmount = (val) => {
        setAmountInEthers(val / 1000)
        setAmount(val)
    }

    if (videoExist) return (
        <div>
            <Header />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={MODAL_STYLE}
                contentLabel="Example Modal" >

                <h1>Sponsor this creator</h1>
                <div><small className='grey-text'>{currentVideo.owner}</small></div>

                <div className="space-20"></div>
                <b>{amountInEthers} ETH</b>
                <div className="space-20"></div>

                <input onChange={e => convertAmount(e.target.value)} type="number" className='text-input-2' placeholder='Enter amount in dappies' />

                <div className="space-20"></div>
                <p className='grey-text'>1 Dappy = 0.001 ETH</p>

                <div className="space-20"></div>
                <div className="btn-filled" onClick={sponsorCreator}>Send 🚀</div>
            </Modal>

            <div className='under-header'>
                <div className="playing-video-container flex-between-top">
                    <div style={{ width: '100%', flex: 3 }}>
                        <video autoPlay={true} controls src={currentVideo.src} className='playing-video-element'>
                            <source src={currentVideo.src} type="video/*" />
                        </video>
                    </div>

                    <div className="playing-video-text" style={{ height: '100vh', overflowY: 'scroll', paddingTop: 0, marginTop: '-10px' }}>
                        <h1 className='playing-video-title'>{currentVideo.title}</h1>

                        <div className="flex-between">
                            <div className="flex">
                                <div className="avatar" dangerouslySetInnerHTML={{ __html: avatar }} ></div>
                                <div className="space-10"></div>
                                <div>
                                    <b>Space Boy</b>
                                    <div className="space-5"></div>
                                    <div><small className='grey-text'>{currentVideo.owner}</small></div>
                                </div>
                            </div>
                        </div>

                        <div className="space-20"></div>
                        <div className="btn-filled" onClick={openModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            Support creator
                        </div>


                        <div className="space-20"></div>
                        <div style={{ maxWidth: '700px' }}>
                            <b>Published {currentVideo.timestamp}</b>
                            <p>{currentVideo.description}</p>
                        </div>


                        <div className="flex-wrap">
                            {
                                currentVideo.tags
                                    ? currentVideo.tags.split(',').map((tag, index) => {
                                        return <div onClick={() => viewTag(tag)} className='playing-video-tag-item' style={{ marginRight: '5px' }} key={index}>#{tag}</div>
                                    }) : ''
                            }
                        </div>

                        <div className="space-20"></div>
                        <h2>Watch next</h2>
                        <div className="space-10"></div>
                        <div style={{ paddingBottom: '100px' }}>
                            {
                                videos.map((video, index) => {
                                    return <PosterCard key={index} tags={video.tags} isFullWidth={true} thumbnail={video.thumbnail} videoLength={video.videoLength} description={video.description} owner={video.owner} title={video.title} id={video.id} src={video.src} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

    else return (
        <p>
            <Header />
            <TagsHeader />

            <div className="fullscreen flex-center">
                <img src={EmptyState} className='empty-state-img' alt="Video does not exist" />
                <h2>Oops! Video not found</h2>
            </div>

        </p>);
}