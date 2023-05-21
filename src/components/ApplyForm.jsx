import React, { useState } from 'react'
import upload from "../assets/Leaveform/upload.png"
import Upload from './Upload'
import '../styles/Applyform.css'


const ApplyForm = () => {
    const [filename, setFilename] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const file = filename ? filename[0].name : "";
    return (
        <>
            <form className="form-container">
                <h1 className="form-title">Apply form</h1>
                <div className="form-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="input" placeholder="Enter Name" />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="input" placeholder="Enter email" />
                </div>
                <div className="form-input">
                    <label htmlFor="leave">Leave Reason</label>
                    <input type="text" className="textarea" />
                </div>
                <div className="form-input">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" className="input" max={new Date().toISOString().split("T")[0]} />
                </div>
                <p className="form-text">To</p>
                <div className="form-input">
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" className="input" />
                </div>
                <div className="form-input">
                    <label htmlFor="upload">Upload Documents</label>
                    <input type="text" className="inputfile" value={file} readOnly />
                    <div className="upload-button" onClick={() => setOpenModal(true)}>
                        <img src={upload} alt="" className="upload-icon" />
                        <p>Upload</p>
                    </div>
                </div>
                <div className="apply">
                    <button type="submit" className="apply-button">Apply</button>
                </div>
            </form>
            {openModal && <Upload closeModal={setOpenModal} setFilename={setFilename} Filename={filename} />}
        </>
    );
};

export default ApplyForm
