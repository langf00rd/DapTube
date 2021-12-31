import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import PosterCard from '../components/PosterCard';
import TagsHeader from '../components/TagsHeader';
import { GET_VIDEOS } from "../constants/constants"

export default function Home() {
    let navigate = useNavigate();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const initPage = async () => {

            if (!sessionStorage.getItem('address')) {
                navigate('/')
                return
            }

            setVideos(await GET_VIDEOS())
        }

        initPage()
        return () => { }
    }, [])

    return (
        <div>
            <Header />

            <main>
                <TagsHeader />
                <div className="main-content-wrapper">
                    <div className="main-wrapper">
                        {
                            videos.map((video, index) => {
                                return <PosterCard key={index} tags={video.tags} thumbnail={video.thumbnail} videoLength={video.videoLength} description={video.description} owner={video.owner} title={video.title} id={video.id} src={video.src} />
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}