import React, { useEffect } from "react";
import { useLocation } from "react-router"

import BackHeader from '../components/BackHeader';
import Header from "../components/Header";
import PosterCard from "../components/posterCard";

export default function Watch() {
    const route = useLocation()

    const title = route.state.title
    const src = route.state.src
    const id = route.state.id
    const owner = route.state.owner

    return (
        <div>
            <Header />
            {/* <BackHeader title='Watch' /> */}

            <div className='under-header'>
                <div className="flex-between-top">
                    <div className="playing-video-container">
                        <video autoPlay controls poster className='playing-video-element'></video>
                        <h2>{title}</h2>
                        <small>{owner}</small>
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
            {/* <div className="under-header">
            </div> */}
        </div>
    );
}