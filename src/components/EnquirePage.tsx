import React from 'react';
import { useNavigate } from 'react-router-dom';
import EnquirePopup from './Enquire'

const EnquirePage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };
  
  return (
    <EnquirePopup onClose={handleClose} />
  );
};

export default EnquirePage;