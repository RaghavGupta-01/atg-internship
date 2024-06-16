import React, { useState } from 'react';
import close from '../assets/create_account_images/close.svg';
import signup_art from '../assets/create_account_images/signup_art.svg';
import views from '../assets/post_images/views.svg';
import facebook from '../assets/create_account_images/facebook.svg';
import google from '../assets/create_account_images/google.svg';

const CreateAccount = ({ handleClosePopup }) => {
    const [isSignIn, setIsSignIn] = useState(false);

    const toggleSignInSignUp = () => {
        setIsSignIn((prevState) => !prevState);
    };

    return (
        <div
            className="modal fade show"
            style={{ display: 'block', zIndex: 1040, background: 'rgba(0, 0, 0, 0.5)' }}
            role="dialog"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered position-relative">
                <button
                    type="button"
                    className="btn position-absolute"
                    style={{ top: '10px', right: '-25px', zIndex: 1000 }}
                    onClick={handleClosePopup}
                >
                    <img src={close} alt="close" />
                </button>
                <div className="modal-content" >
                    <div className="modal-header custom-modal-header d-flex justify-content-center mb-4">
                        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                    </div>
                    <div className="px-4">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="d-flex fw-bold">{isSignIn ? 'Sign In' : 'Create Account'}</h4>
                            <button className="btn" onClick={toggleSignInSignUp}>
                                {isSignIn ? (
                                    <>
                                        Don’t have an account yet? <span className="text-primary">Create new for free! </span>
                                    </>
                                ) : (
                                    <>
                                        Already have an account? <span className="text-primary">Sign In</span>
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    <div className="d-flex flex-column gap-2">
                                        {!isSignIn && (
                                            <div className="d-flex">
                                                <input type="text" className="form-control custom-input" placeholder="First Name" />
                                                <input type="text" className="form-control custom-input" placeholder="Last Name" />
                                            </div>
                                        )}
                                        <input type="email" className="form-control custom-input" placeholder="Email" />
                                        <div className="d-flex align-items-center justify-content-between position-relative">
                                            <input type="password" className="form-control custom-input" placeholder="Password" />
                                            <button className="btn position-absolute" style={{ right: '10px' }}>
                                                <img src={views} alt="eye" width="18px" height="18px" />
                                            </button>
                                        </div>
                                        {!isSignIn &&
                                            <input
                                                type="password"
                                                className="form-control mb-4 custom-input"
                                                placeholder="Confirm password"
                                            />}
                                        <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4 mt-2" >
                                            {isSignIn ? 'Sign In' : 'Create Account'}
                                        </button>
                                        <div className="d-flex flex-column gap-2">
                                            <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                                                <img src={facebook} alt="facebook" />
                                                {isSignIn ? 'Sign In with Facebook' : 'Sign Up with Facebook'}
                                            </button>
                                            <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                                                <img src={google} alt="google" />
                                                {isSignIn ? 'Sign In with Google' : 'Sign Up with Google'}
                                            </button>
                                            {isSignIn && (
                                                <button className="btn d-none d-lg-block text-center forgot" >
                                                    Forgot Password?
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column">
                                        <img src={signup_art} alt="signup_art" />
                                        {!isSignIn && <p className="info-signup">By signing up, you agree to our Terms & conditions, Privacy policy</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;