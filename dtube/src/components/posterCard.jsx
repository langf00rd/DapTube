import React, { useEffect, useState } from "react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';
import { useNavigate } from "react-router-dom";
import AvatarSvg from "../components/AvatarSvg";

const PosterCard = (props) => {
    let navigate = useNavigate()
    const [avatar, setAvatar] = useState()

    const navigateToWatchScreen = () => { navigate(`/watch?${props.id}`) }

    useEffect(() => {
        let svg = createAvatar(style, { seed: (Date.now() + Math.random() * 1000).toString() });
        setAvatar(svg)

        return () => { }
    }, [])

    return (
        <div className="poster-item">
            <video onClick={navigateToWatchScreen} muted={true} className='poster-img' src={props.src}>
                <source src={props.src} type="video/*" />
            </video>
            <div className="poster-text">
                {/* <div><small className='poster-title'><b>{props.title}</b></small></div> */}

                <div className="space-10"></div>
                <div><small className='post-time'>{props.videoLength ? props.videoLength : '00:--'}</small></div>
                <div className="flex-top">
                    <div> <div className="avatar avatar-sm" dangerouslySetInnerHTML={{ __html: avatar }} ></div></div>
                    <div className="space-10"></div>
                    <div>
                        <b><small>{props.title}</small></b>
                        <div><small className='grey-text'>Space boy</small></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PosterCard