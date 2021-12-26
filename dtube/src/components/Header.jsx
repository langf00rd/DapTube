import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default class Header extends React.Component {
    goBack = () => window.history.back()

    render() {
        return (
            <header>
                <div className="header-wrapper flex-between">
                    <h2>DapTube⚡️</h2>
                    <input type="text" className="search-box" placeholder='Search for video' />
                    <div className="flex-between">
                        <Link to='/home' className="icon-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </Link>
                        <div className="space-20"></div>
                        <Link to='/upload' className="icon-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                        </Link>
                        <div className="space-20"></div>
                        <div className="avatar"></div>
                    </div>
                </div>
            </header>
        );
    }
}
