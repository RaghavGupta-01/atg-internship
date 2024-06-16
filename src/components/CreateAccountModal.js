import React, { useState } from 'react';
import CreateAccountButton from './CreateAccountButton';
import CreateAccountPopup from './CreateAccountPopup';

const CreateAccountModal = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <CreateAccountButton onClick={handleOpenPopup} />
            {showPopup && <CreateAccountPopup isOpen={showPopup} onClose={handleClosePopup} />}
        </>
    );
};

export default CreateAccountModal;