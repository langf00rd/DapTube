import React from "react";

export default class TagsHeader extends React.Component {
    goBack = () => window.history.back()

    render() {
        return (
            <div className="tags-bar">
                <div className="tag-item">All</div>
                <div className="tag-item">Recently uploaded</div>
                <div className="tag-item">Music</div>
                <div className="tag-item">Space</div>
                <div className="tag-item">Movies</div>
                <div className="tag-item">Programming</div>
                <div className="tag-item">Sales</div>
                <div className="tag-item">History</div>
                <div className="tag-item">Psychology</div>
                <div className="tag-item">Science, tech</div>
                <div className="tag-item">Gaming</div>
                <div className="tag-item">Novels</div>
                <div className="tag-item">Other</div>
            </div>
        );
    }
}
