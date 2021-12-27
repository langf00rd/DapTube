import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import PosterCard from '../components/posterCard';
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
        <main>
            <Header />
            <TagsHeader />

            <div className="posts-container">
                {
                    videos.map((video, index) => {
                        return <PosterCard key={index} videoLength={video.videoLength} description={video.description} owner={video.owner} title={video.title} id={video.id} src={video.src} />
                    })
                }
            </div>
        </main>
    );
}