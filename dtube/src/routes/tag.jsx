import React, { useState, useEffect } from "react";
import BackHeader from "../components/BackHeader";
import Header from "../components/Header";
import PosterCard from "../components/posterCard";
import { GET_VIDEOS_BY_TAG, GET_ROUTE_PARAM } from "../constants/constants";

export default function Tag() {
    const [videos, setVideos] = useState([])
    const [tag, setTag] = useState()

    useEffect(() => {
        const initPage = async () => {
            setVideos(await GET_VIDEOS_BY_TAG(GET_ROUTE_PARAM()))
            setTag(GET_ROUTE_PARAM())
        }

        initPage()

        return () => { }
    }, [])

    return (
        <div>
            <Header />
            <BackHeader title={tag} />

            <div style={{ padding: '0 20px 20px 20px' }}>

                {
                    videos.length > 0
                        ?

                        <div>
                            {
                                videos.map((video, index) => {
                                    return <PosterCard key={index} tags={video.tags} thumbnail={video.thumbnail} videoLength={video.videoLength} description={video.description} owner={video.owner} title={video.title} id={video.id} src={video.src} />
                                })
                            }
                        </div>

                        : <h2>No videos with tag '{tag}' </h2>
                }
            </div>
        </div >
    );
}