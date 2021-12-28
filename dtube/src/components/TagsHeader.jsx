import React from "react";
import { useNavigate } from "react-router-dom";
import { VIDEO_TAGS } from "../constants/constants";

const TagsHeader = () => {
    let navigate = useNavigate()

    const viewTag = (tag) => {
        console.log(tag)

        navigate(`/tag?${tag}`)
    }

    return (
        <div className="tags-bar">
            {
                VIDEO_TAGS.map((tag, index) => {
                    return <div onClick={() => viewTag(tag)} key={index} className="tag-item">{tag}</div>
                })
            }
        </div>
    );
}

export default TagsHeader