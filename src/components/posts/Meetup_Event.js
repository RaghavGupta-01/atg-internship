import React from 'react'
import more_options from '../../assets/post_images/more_options.svg'
import views from '../../assets/post_images/views.svg'
import share from '../../assets/post_images/share.svg'
import calendar from '../../assets/post_images/calendar.svg'
import location from '../../assets/post_images/location.svg'
import meetup_img from '../../assets/post_banners/meetup_img.jpeg'
import ronal from '../../assets/authors/ronal.jpeg'

const Meetup_Event = () => {
    return (
        <div className="d-flex flex-column border border-1 rounded-2" style={{ maxWidth: '692px', borderColor: '#E0E0E0', fill: '#FFFFFF' }}>
            <img src={meetup_img} alt="img" className="imagePost" />
            <div className="p-4">
                <h6 className="d-flex">🗓️ Meetup</h6>
                <div className="d-flex gap-6 justify-content-between">
                    <h4>Finance & Investment Elite Social Mixer @Lujiazui</h4>
                    <div className="btn align-self-start">
                        <div className="dropdown">
                            <div type="button">
                                <img src={more_options} alt="more options" height="28px" width="28px" />
                            </div>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Edit</button></li>
                                <li><button className="dropdown-item" type="button">Report</button></li>
                                <li><button className="dropdown-item" type="button">Option 3</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-5" style={{ height: '20px', width: '358', marginBottom: '16px' }}>
                    <div className="d-flex align-items-center gap-1">
                        <img src={calendar} alt="calendar" />
                        <span>Fri, 12 Oct, 2018</span>
                    </div>
                    <div className="d-flex align-items-center gap-1" style={{ paddingLeft: '40px' }}>
                        <img src={location} alt="location" />
                        <span>Ahmedabad, India</span>
                    </div>
                </div>
                <button className="post-link btn mb-4 fw-semibold"
                    style={{ color: '#E56135', width: '100%' }} >Visit WebSite
                </button>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <img className="rounded-circle" alt="Profile" src={ronal} width="48" height="48" />
                        <div className="d-flex flex-column">
                            <div className="text-wrapper">Ronal Jones</div>
                            <div className="d-lg-none">
                                <img src={views} alt="views" />
                                <span>1.4k views</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-none d-lg-block pe-4">
                            <img src={views} alt="views" />
                            <span>1.4k views</span>
                        </div>
                        <button className="btn d-flex align-items-center gap-2" style={{ background: '#EDEEF0' }} >
                            <img src={share} alt="share" />
                            <span className="d-lg-none">Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meetup_Event