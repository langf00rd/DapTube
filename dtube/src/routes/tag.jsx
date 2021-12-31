import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import BackHeader from "../components/BackHeader";
import Header from "../components/Header";
import PosterCard from "../components/PosterCard";
import TagsHeader from "../components/TagsHeader";
import { GET_VIDEOS_BY_TAG, GET_ROUTE_PARAM } from "../constants/constants";

export default function Tag() {
    const location = useLocation();

    const [videos, setVideos] = useState([])
    const [tag, setTag] = useState()

    useEffect(() => {
        const initPage = async () => {
            setVideos(await GET_VIDEOS_BY_TAG(GET_ROUTE_PARAM()))
            setTag(GET_ROUTE_PARAM())
        }

        initPage()

        return () => { }
    }, [location])

    return (
        <div>
            <Header />
            <BackHeader title={tag} />

            {
                videos.length > 0 ?
                    videos.map((video, index) => {
                        return <PosterCard key={index} tags={video.tags} thumbnail={video.thumbnail} videoLength={video.videoLength} description={video.description} owner={video.owner} title={video.title} id={video.id} src={video.src} />
                    })

                    : <div className="fullscreen flex-center">
                        <h3>No videos with the tag {tag}</h3>
                    </div>
            }

            {/* 
            <main >
                <TagsHeader />
                <div className="main-content-wrapper">
                    <BackHeader title={tag} />
                    <div className="main-wrapper">
                        {
                            videos.length > 0 ?
                                videos.map((video, index) => {
                                    return <PosterCard key={index} tags={video.tags} thumbnail={video.thumbnail} videoLength={video.videoLength} description={video.description} owner={video.owner} title={video.title} id={video.id} src={video.src} />
                                })

                                : <h2>No videos with the tag {tag}</h2>
                        }
                    </div>
                </div>
            </main> */}

            {/* <main>
                <div className='main-width-constraint'>
                    <BackHeader title={tag} />
                    <div className="main-wrapper">
                        {
                            videos.length > 0 ?
                                videos.map((video, index) => {
                                    return <PosterCard key={index} tags={video.tags} thumbnail={video.thumbnail} videoLength={video.videoLength} description={video.description} owner={video.owner} title={video.title} id={video.id} src={video.src} />
                                })

                                : <h2>No videos with the tag {tag}</h2>
                        }
                    </div>
                </div>
            </main> */}
        </div >
    );
}