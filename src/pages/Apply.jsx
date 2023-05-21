import React from 'react';
import ApplyForm from '../components/ApplyForm';
import banner from '../assets/Leaveform/banner.png';
import "../Styles/Apply.css"
const Apply = () => {
  return (
    <div className="apply-container">
      <img src={banner} alt="" className="banner-image" />
      <ApplyForm />
    </div>
  );
};

export default Apply;
