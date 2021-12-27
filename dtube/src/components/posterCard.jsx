import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PosterCard = (props) => {
    let navigate = useNavigate()

    const navigateToWatchScreen = () => {
        navigate(`/watch?${props.id}`)
        // navigate(`/watch/${props.id}`, { state: props }, { search: props })
    }

    return (
        <div className="poster-item">
            <video onClick={navigateToWatchScreen} muted={true} className='poster-img' src={props.src}>
                <source src={props.src} type="video/*" />
            </video>
            <div className="poster-text">
                <div><small className='poster-title'>{props.title}</small></div>
                <div><small className='post-time'>{props.videoLength ? props.videoLength : '00:--'}</small></div>
            </div>
        </div >
    );
}

export default PosterCard