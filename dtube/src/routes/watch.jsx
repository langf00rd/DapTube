import React, { useEffect, useState } from "react";
import { GET_BLOCKCHAIN_DATA, GET_ROUTE_ID, GET_VIDEOS, GET_VIDEO_FROM_ID } from "../constants/constants";
import BackHeader from '../components/BackHeader';
import Header from "../components/Header";
import PosterCard from "../components/posterCard";

export default function Watch() {

    const [videos, setVideos] = useState([])
    const [currentVideo, setCurrentVideo] = useState({})

    useEffect(() => {

        const initPage = async () => {
            setVideos(GET_VIDEOS())

            if (!await GET_VIDEO_FROM_ID(GET_ROUTE_ID())) {
                alert('video does not exist')
                setCurrentVideo({})

                return
            }

            const currentVideo = setCurrentVideo(await GET_VIDEO_FROM_ID(GET_ROUTE_ID()))
        }

        initPage()

        return () => { }
    }, [])

    return (
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
                            <small>{currentVideo.description}</small>
                            <div className='flex-between'>
                                <small>{currentVideo.owner}</small>
                                <div className="btn-filled">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                    Donate to creator
                                </div>
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
                        <h2>See also</h2>
                        <PosterCard title='video.title' src='video.src' />
                        <PosterCard title='video.title' src='video.src' />
                        <PosterCard title='video.title' src='video.src' />
                        <PosterCard title='video.title' src='video.src' />
                        <PosterCard title='video.title' src='video.src' />
                        <PosterCard title='video.title' src='video.src' />
                    </div>
                </div>
            </div>
        </div>
    );
}