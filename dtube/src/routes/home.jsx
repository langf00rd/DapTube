import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
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
            videosArray.push(video)
        }

        setVideos(videosArray)
    }

    return (
        <main>
            <header>
                <div className="header-wrapper flex-between">
                    <h2>DapTube⚡️</h2>
                    <input type="text" className="search-box" placeholder='Search for video' />
                    <div className="flex-between">
                        <Link to='/upload' className="btn-filled">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                            Upload video
                        </Link>
                    </div>
                </div>
            </header>

            <div className="poster-container">
                {
                    videos.map(function (video, index) {
                        // return (<p key={index}>{video[1]}</p>);
                        {/* <img className='poster-img' src="https://cfvod.kaltura.com/p/1926081/sp/192608100/thumbnail/entry_id/1_48193rbm/version/100001/width/372/height/209" alt="" /> */ }

                        return <div key={index} className="poster-item">
                            <video className='poster-img' src={video[1]}></video>
                            <div className="poster-text">
                                <div><small className='poster-title'>{video[2]}</small></div>
                                <div><small className='post-time'>12:03</small></div>
                            </div>
                        </div>

                    })
                }

                {/* <div className="poster-item">
                    <img className='poster-img' src="https://cfvod.kaltura.com/p/1926081/sp/192608100/thumbnail/entry_id/1_48193rbm/version/100001/width/372/height/209" alt="" />
                    <div className="poster-text">
                        <div><small className='poster-title'>The Avengers - Age Of Ultron is nearly over</small></div>
                        <div><small className='post-time'>12:03</small></div>
                    </div>
                </div> */}

            </div>
        </main>
    );
}