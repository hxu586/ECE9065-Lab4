// src/LoginPopup.js
import React from 'react';
import './LoginPopup.css';
import westernLogo from './western_logo.webp';


const LoginPopup = ({ onClose }) => {
    return (
        <div className="login-popup">
            <div className="login-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <img src={westernLogo} alt="Western Logo" className="westernLogo" />
                <h2 style={{marginBottom: "30px"}}>Sign in</h2>
                <p>Use your User Account</p>
                <form>
                    <div className="form-group">
                        <input type="username" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <p className="forgot-email">Forgot username?</p>
                    </div>
                    <div className="form-group">

                    </div>
                    <div className="form-group action-buttons">
                        <button type="button" className="create-account">Create account</button>
                        <button type="submit" className="submit-button">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;


