import React, { useState } from 'react'
import triangle from '../assets/triangle.svg'
import join_group from '../assets/join_group.svg'
import leave_group from '../assets/leave_group.svg'

const Post_Header = () => {
    const [JoinGroup, setJoingroup] = useState(false);
    const toggleJoinGroup = () => {
        setJoingroup((prevState) => !prevState);
    };
    return (
        <div className="d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top"
            style={{ maxWidth: '1040px', height: '68px', background: 'rgb(255, 255, 255)', borderTop: '1px solid rgba(0, 0, 0, 0.2)' }}>
            <ul className="nav my-2 nav-underline">
                <li className="nav-item">
                    <a className="nav-link active" href="/">All Posts (32)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Article</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Event</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Job</a>
                </li>
            </ul>
            <div className="d-flex my-2 align-items-center">
                <button className="btn" aria-label="write-post" style={{ background: 'rgb(242, 242, 242)' }}>
                    Write a Post
                    <img src={triangle} alt="arrow down" />
                </button>
                {JoinGroup ?
                    (<>
                        <button className="btn ms-2 gap-2 d-flex align-items-center" style={{ border: '0.8px solid #989899', color: '#6A6A6B', background: 'white' }} onClick={toggleJoinGroup}>
                            <img src={leave_group} alt="Leave group" />
                            <span> Leave Group</span>
                        </button>
                    </>
                    ) : (
                        <>
                            <button className="btn btn-primary ms-2 gap-2 d-flex align-items-center" style={{ border: '0.8px' }} onClick={toggleJoinGroup}>
                                <img src={join_group} alt="Join group" />
                                <span> Join Group</span>
                            </button>
                        </>
                    )}

            </div>
        </div >
    )
}

export default Post_Header