import React from "react";
import BackHeader from '../components/BackHeader';
import Header from "../components/Header";

export default function Watch() {
    const goBack = () => window.history.back()

    return (
        <div>
            <Header />
            <BackHeader title='Watch' />
            <div className="under-header">
            </div>
        </div>
    );
}