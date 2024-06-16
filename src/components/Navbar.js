import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import triangle from '../assets/triangle.svg';
import CreateAccount from './CreateAccount';

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleCreateAccount = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <nav className="container d-none d-lg-flex align-items-center justify-content-between p-3">
            <a href="/">
                <img src={logo} width="162.57px" height="24px" alt="Logo" />
            </a>

            <form
                className="d-flex"
                style={{ width: '360px', borderRadius: '21px', color: 'gray' }}
            >
                <button className="search-button" type="submit">
                    <img alt="Search" src={search} width="22" height="22" />
                </button>
                <input
                    className="form-control search-input"
                    type="search"
                    placeholder="Search for your favorite groups in ATG"
                    aria-label="Search"
                />
            </form>

            <div className="d-flex align-items-center gap-1">
                <button
                    className="btn custom-btn-create p-0 m-0"
                    onClick={handleCreateAccount}
                >
                    Create Account. <span className="text-primary fw-bold">It's Free!</span>
                </button>
                <div className="">
                    <img src={triangle} alt="triangle" />
                </div>
            </div>
            {showPopup && <CreateAccount handleClosePopup={handleClosePopup} />}
        </nav>
    );
};

export default Navbar;