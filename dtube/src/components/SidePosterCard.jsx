import React, { useEffect, useState } from "react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';
import { useNavigate } from "react-router-dom";
import AvatarSvg from "./AvatarSvg";

const SidePosterCard = (props) => {
    let navigate = useNavigate()
    const [avatar, setAvatar] = useState()
    const [tags, setTags] = useState([])

    const navigateToWatchScreen = () => { navigate(`/watch?${props.id}`) }

    useEffect(() => {
        let svg = createAvatar(style, { seed: (Date.now() + Math.random() * 1000).toString() });
        setAvatar(svg)

        setTags(props.tags.split(','))

        return () => { }
    }, [])

    return (
        <div className="poster-item" onClick={navigateToWatchScreen} style={{ width: props.isFullWidth ? '100%' : null }}>
            <div className='poster-img-wrapper'><img src={props.thumbnail} className='poster-img' alt={props.title} /></div>

            <div className="poster-text">
                <div className="space-10"></div>
                <div><small className='post-time'>{props.videoLength ? props.videoLength : '00:--'}</small></div>
                <div>
                    <div className="poster-title">{props.title}</div>
                    <div className='flex'>
                        <small className='grey-text'>Space boy</small>
                        <div className="space-5"></div>
                        •
                        <div className="space-5"></div>
                        <small className='grey-text'>Space boy</small>
                    </div>
                </div>
            </div>
        </div >
        // <div className="poster-item flex-between-top" onClick={navigateToWatchScreen} style={{ width: props.isFullWidth ? '100%' : null }}>
        //     <div className='poster-img-wrapper side-poster-img-wrapper'><img src={props.thumbnail} className='poster-img' alt={props.title} /></div>

        //     <div className="poster-text">
        //         {/* <div className="space-10"></div> */}
        //         {/* <div><small className='post-time'>{props.videoLength ? props.videoLength : '00:--'}</small></div> */}
        //         <div className="flex-top">
        //             {/* <div> <div className="avatar avatar-sm" dangerouslySetInnerHTML={{ __html: avatar }} ></div></div> */}
        //             <div className="space-5"></div>
        //             <div>
        //                 <div className="poster-title">{props.title}</div>
        //                 <div><small className='grey-text poster-name'>Space boy</small></div>
        //                 <div><small className='grey-text'>2d ago</small></div>
        //             </div>
        //         </div>
        //     </div>
        // </div >
    );
}

export default SidePosterCard