import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CAPITALIZE_STRING, CHECK_PREFS, MANAGE_PREFS, PREFS, VIDEO_TAGS } from "../constants/constants";

const Welcome = () => {
    let navigate = useNavigate();
    const [name, setName] = useState('')

    useEffect(() => {
        CHECK_PREFS()
        setName(localStorage.getItem('username'))

        return () => { }
    }, [])

    const saveChanges = () => {

        let prefs = localStorage.getItem('prefs')

        if (name.length <= 1) {

            alert('Please enter your username')
            return
        }

        if (prefs.split(',').length < 4) {

            alert('Choose at least 3 tags')
            return
        }

        localStorage.setItem('username', name)
        navigate('/home')
    }

    return (
        <main className='flex-center'>
            <div className="center-width">

                <div className='input-wrapper'>
                    <h2>What should we call you?</h2><br />
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className='text-input-2 input-border' placeholder='' />
                </div>
                <div className="space-40"></div>

                <div className='input-wrapper'>
                    <h2>What are your interests?</h2><br />

                    <div className="flex-wrap">
                        {
                            VIDEO_TAGS.map((tag, index) => {
                                return <TagItem key={index} tag={tag} />
                            })
                        }
                    </div>

                </div>
                <div className="space-40"></div>

                <div className="btn-filled fade-filled" onClick={saveChanges}>Save</div>

                <p>Your information is not saved by us. On our platform, we do not keep track of your activities. We do not collect any background information about you, such as your location or IP address. </p>

            </div>
        </main >
    );
}

const TagItem = (props) => {

    let tagsFromStorage = localStorage.getItem('prefs')

    const [isActive, setIsActive] = useState(false)
    const [tags, setTags] = useState(tagsFromStorage ? localStorage.getItem('prefs').split(',') : [])

    useEffect(() => {

        if (tags.includes(props.tag)) setIsActive(true)

        return () => { }
    }, [])

    const toggleActiveState = () => {

        setIsActive(!isActive)

        if (!isActive) {

            console.log('isActive', tags)
            MANAGE_PREFS(props.tag, true)
            return
        }

        MANAGE_PREFS(props.tag, false)

    }

    return <div onClick={toggleActiveState} className={isActive ? "tag-item active-tag-item" : "tag-item"}>{props.tag}</div>
}

export default Welcome