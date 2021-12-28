import React, { useEffect, useState } from "react";
import { GET_ROUTE_ID, GET_VIDEOS, GET_VIDEO_FROM_ID } from "../constants/constants";
import Header from "../components/Header";
import PosterCard from "../components/posterCard";
import { useLocation } from 'react-router-dom';
import EmptyState from '../assets/e.png'
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';


export default function Watch() {
    const location = useLocation();

    const [videoExist, setVideoExist] = useState(true)
    const [avatar, setAvatar] = useState()
    const [videos, setVideos] = useState([])
    const [currentVideo, setCurrentVideo] = useState({})

    useEffect(() => {

        let svg = createAvatar(style, { seed: (Date.now() + Math.random() * 1000).toString() });
        setAvatar(svg)

        const initPage = async () => {
            setVideos(await GET_VIDEOS())

            if (!await GET_VIDEO_FROM_ID(GET_ROUTE_ID())) {
                setVideoExist(false)
                setCurrentVideo({})

                return
            }

            setVideoExist(true)
            setCurrentVideo(await GET_VIDEO_FROM_ID(GET_ROUTE_ID()))
        }

        initPage()

        return () => { }
    }, [location])

    if (videoExist) return (
        <div>
            <Header />

            <div className='under-header'>
                <div className="flex-between-top">
                    <div className="playing-video-container">
                        <video autoPlay={true} controls src={currentVideo.src} className='playing-video-element'>
                            <source src={currentVideo.src} type="video/*" />
                        </video>
                        <div className="playing-video-text">
                            <h2 className='playing-video-title'>{currentVideo.title}</h2>
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
                                <div className="btn-filled">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                    Donate to creator
                                </div>
                            </div>
                            <div className="space-20"></div>
                            <div style={{ maxWidth: '700px' }}>
                                <small>{currentVideo.description}</small>
                            </div>
                        </div>
                        <div className="space-20"></div>
                        <div className="flex">
                            <a className='playing-video-tag-item' href="#">#art</a>
                            <a className='playing-video-tag-item' href="#">#technology</a>
                            <a className='playing-video-tag-item' href="#">#web3</a>
                            <a className='playing-video-tag-item' href="#">#blockchain</a>
                            <a className='playing-video-tag-item' href="#">#crypto</a>
                        </div>
                    </div>

                    <div className="side-video-list">
                        <b>Watch next</b>
                        {
                            videos.map((video, index) => {
                                return <PosterCard key={index} thumbnail={video.thumbnail} videoLength={video.videoLength} description={video.description} owner={video.owner} title={video.title} id={video.id} src={video.src} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    );

    else return (
        <p>
            <Header />

            <div className="fullscreen flex-center">
                <img src={EmptyState} className='empty-state-img' alt="Video does not exist" />
                <h2>Oops! Video not found</h2>
            </div>

        </p>);
}