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
                    <div className="search-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input type="search" placeholder='Search for video' />
                    </div>
                    {/* <div className="flex-between">
                        <Link to='/home' className="icon-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12.148l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z" /></svg>
                        </Link>
                    </div> */}

                    <div className="flex-between">
                        <Link to='/upload' className="btn-filled">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="24" height="24" viewBox="0 0 24 24"><path d="M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z" /></svg>
                            Upload
                        </Link>
                        <div className="space-20"></div>
                        <div className="avatar" dangerouslySetInnerHTML={{ __html: AvatarSvg }} ></div>
                    </div>
                </div>
            </header>
        );
    }
}
