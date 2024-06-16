import React from 'react';
import login from '../assets/login.svg'
const CreateAccountButton = ({ onClick }) => {
    return (
        <button
            className="btn circle-write-post rounded-circle d-flex justify-content-center align-items-center position-fixed d-lg-none"
            style={{ bottom: '18px', right: '18px' }}
            onClick={onClick}
        >
            <img src={login} alt="write a post" height="24" width="24" />
        </button>
    );
};

export default CreateAccountButton;