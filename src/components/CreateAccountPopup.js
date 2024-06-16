import React, { useState } from 'react';
import close_dark from '../assets/create_account_images/close_dark.svg';
import views from '../assets/post_images/views.svg';
import facebook from '../assets/create_account_images/facebook.svg';
import google from '../assets/create_account_images/google.svg';

const CreateAccountPopup = ({ isOpen, onClose }) => {
    const [isSignIn, setIsSignIn] = useState(false);

    const toggleSignInSignUp = () => {
        setIsSignIn((prevState) => !prevState);
    };
    return (
        <div className="d-lg-none " style={{
            position: 'fixed',
            bottom: 0,
            // left: 0,
            width: '100%',
            background: '#fff',
            // display: 'flex',
            zIndex: 1000,
            borderRadius: '8px 8px 0 0',
            boxShadow: '0 8px 24px #00000040',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
        }}>
            <div className="d-flex flex-column p-4 w-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="d-flex fw-bold">{isSignIn ? 'Welcome Back!' : 'Create Account'}</h4>
                    <button className="btn" onClick={onClose}>
                        <img src={close_dark} alt="close" />
                    </button>
                </div>
                {!isSignIn && (
                    <>
                        <div className="d-flex">
                            <input type="text" className="form-control custom-input" placeholder="First Name" />
                            <input type="text" className="form-control custom-input" placeholder="Last Name" />
                        </div>
                    </>
                )}
                <input type="email" className="form-control custom-input" placeholder="Email" />
                <div className="d-flex align-items-center justify-content-between position-relative">
                    <input type="password" className="form-control custom-input" placeholder="Password" />
                    <button className="btn position-absolute" style={{ right: '10px' }} >
                        <img src={views} alt="eye" width="18px" height="18px" />
                    </button>
                </div>
                {!isSignIn && (
                    <input type="password" className="form-control mb-4 custom-input" placeholder="Confirm password" />
                )}
                <ul className="d-flex justify-content-between align-items-center mb-4 p-0 mt-4">
                    <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center pt-2 pb-2 ps-4 pe-4" data-bs-dismiss="modal" href="/">
                        {isSignIn ? 'Sign In' : 'Create Account'}
                    </button>
                    <button className="btn text-primary link-underline-dark" onClick={toggleSignInSignUp}>
                        {isSignIn ? 'or, Create Account' : 'or, Sign In'}
                    </button>
                </ul>
                <div className="d-flex flex-column gap-2 mb-4">
                    <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group" >
                        <img src={facebook} alt="facebook" />
                        {isSignIn ? 'Sign In with Facebook' : 'Sign Up with Facebook'}
                    </button>
                    <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center" >
                        <img src={google} alt="google" />
                        {isSignIn ? 'Sign In with Google' : 'Sign Up with Google'}                    </button>
                </div>
                {!isSignIn ? (
                    <p className="info-signup text-center">
                        By signing up, you agree to our Terms & conditions, Privacy policy
                    </p>)
                    :
                    (
                        <button class="btn  text-center forgot mb-5" fdprocessedid="e7znxp">
                            Forgot PassWord?
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default CreateAccountPopup;