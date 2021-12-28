import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarSvg from "../components/AvatarSvg";

export default class Header extends React.Component {
    goBack = () => window.history.back()

    render() {
        return (
            <header>
                <div className="header-wrapper flex-between">
                    <h2 className='color-span'>DapTube⚡️</h2>
                    <div className="flex-between">
                        <Link to='/home' className="icon-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" /></svg>
                        </Link>
                    </div>
                    <input type="text" className="search-box" placeholder='Search for video' />
                    <Link to='/upload' className="btn-filled">
                        <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="24" height="24" viewBox="0 0 24 24"><path d="M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z" /></svg>
                        Upload
                    </Link>
                    <div className="avatar" dangerouslySetInnerHTML={{ __html: AvatarSvg }} ></div>
                </div>
            </header>
        );
    }
}
