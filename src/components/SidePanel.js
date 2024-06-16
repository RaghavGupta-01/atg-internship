import React, { useState } from 'react'
import location from '../assets/post_images/location.svg'
import cross from '../assets/cross.svg'
import caution from '../assets/caution.svg'
import like from '../assets/like.svg'
import leisure from '../assets/groups_images/leisure.jpeg'
import activism from '../assets/groups_images/activism.jpeg'
import mba from '../assets/groups_images/mba.jpeg'
import philosophy from '../assets/groups_images/philosophy.jpeg'


const SidePanel = () => {
    const [Follow, setFollow] = useState(false);
    const toggleFollow = () => {
        setFollow((prevState) => !prevState);
    };
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={location} alt="location" />
                    <input type="text" placeholder="Enter Your Location" className="input-text" />
                </div>
                <button className="btn">
                    <img src={cross} alt="cross" style={{ height: '15px', width: '15px' }} />
                </button>
            </div>
            <hr className="my-1" />
            <div className="d-flex align-items-center gap-2 mb-4">
                <img src={caution} alt="caution" className="align-self-start" />
                <p className="location-info">Your location will help us serve better and extend a personalised experience.</p>
            </div>
            <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
                <img src={like} alt="like" />
                <span className="text-recommended">Recommended Groups</span>
            </div>
            <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                        <img className="rounded-circle" src={leisure} alt="Profile" width="36" height="36" />
                        <div className="text-wrapper">Leisure</div>
                    </div>
                    <div onClick={toggleFollow}>
                        {Follow ? (
                            <span className="btn rounded-5" style={{ color: '#FFFFFF', background: '#000000' }}>Followed</span>

                        ) : (
                            <span className="btn rounded-5" style={{ color: '#000000', background: '#EDEEF0' }}>Follow</span>

                        )}
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                        <img className="rounded-circle" src={activism} alt="Profile" width="36" height="36" />
                        <div className="text-wrapper">Activism</div>
                    </div>
                    <span className="btn follow rounded-5" >Follow</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                        <img className="rounded-circle" src={mba} alt="Profile" width="36" height="36" />
                        <div className="text-wrapper">MBA</div>
                    </div>
                    <span className="btn follow rounded-5" >Follow</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                        <img className="rounded-circle" src={philosophy} alt="Profile" width="36" height="36" />
                        <div className="text-wrapper">Philosophy</div>
                    </div>
                    <span className="btn follow rounded-5" >Follow</span>
                </div>
            </div>
            <button className="btn d-flex text-end mt-5 text-primary align-self-end " >See More...</button>
        </>
    )
}

export default SidePanel