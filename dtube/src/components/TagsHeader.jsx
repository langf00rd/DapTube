import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_ROUTE_PARAM, VIDEO_TAGS } from "../constants/constants";

const TagsHeader = () => {
    let navigate = useNavigate()
    const [isActive, setIsActive] = useState()

    const isActiveTag = (tag) => {

        if (GET_ROUTE_PARAM() === tag || tag === 'All') return true
        return false

    }

    const viewTag = (tag) => {

        if (tag === 'All') {
            navigate(`/home`)
            return
        }

        navigate(`/tag?${tag}`)
    }

    return (
        <div className="tags-bar">
            {
                VIDEO_TAGS.map((tag, index) => {
                    return <div style={{ background: isActiveTag(tag) ? '#000' : '', color: isActiveTag(tag) ? '#fff' : '' }} onClick={() => viewTag(tag)} key={index} className="tag-item">{tag}</div>
                })
            }
        </div >
    );
}

export default TagsHeader