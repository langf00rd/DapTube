import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import PosterCard from '../components/posterCard';
import TagsHeader from '../components/TagsHeader';
import { GET_BLOCKCHAIN_DATA, GET_ACCOUNTS } from "../constants/constants"

export default function Home() {
    let navigate = useNavigate();
    const [account, setAccount] = useState(sessionStorage.getItem('address'));
    const [dapTube, setDapTube] = useState();
    const [videos, setVideos] = useState([]);
    const [videoCount, setVideoCount] = useState(0);

    useEffect(() => {
        if (!account) {
            navigate('/')
            return
        }

        loadVideos()
        return () => { }
    }, [])

    const loadVideos = async () => {

        const [isConnected, payload] = await GET_BLOCKCHAIN_DATA()
        if (!isConnected) return

        const dapTubeVideoCount = await payload.methods.videoCount().call()
        const videosArray = []

        setDapTube(payload)
        setAccount(await GET_ACCOUNTS())
        setVideoCount(dapTubeVideoCount)

        for (let i = dapTubeVideoCount; i >= 1; i--) {
            const video = await payload.methods.videos(i).call()
            console.log(video)
            videosArray.push(video)
        }

        setVideos(videosArray)
    }

    return (
        <main>
            <Header />
            <TagsHeader />

            <div className="posts-container">
                {
                    videos.map((video, index) => {
                        return <PosterCard key={index} owner={video.owner} title={video.title} id={video.id} src={video.src} />
                    })
                }
            </div>
        </main>
    );
}