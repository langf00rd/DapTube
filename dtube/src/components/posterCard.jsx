import React from "react";
import { useNavigate } from "react-router-dom";

const PosterCard = (props) => {
    let navigate = useNavigate()

    const navigateToWatchScreen = () => {
        navigate(`/watch/${props.id}`, { state: props })
    }

    return (
        <div className="poster-item">
            <video onClick={navigateToWatchScreen} className='poster-img' src={props.src}></video>
            <div className="poster-text">
                <div><small className='poster-title'>{props.title}</small></div>
                <div><small className='post-time'>12:03</small></div>
            </div>
        </div >
    );
}

export default PosterCard