import React, { useState } from 'react';
import './LoginPopup.css';
import westernLogo from './western_logo.webp';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const LoginPopup = ({ onClose }) => {
    const [isLoginView, setIsLoginView] = useState(true);

    const handleLogin = async (event) => {
        event.preventDefault();
        // Gather your form data
        const username = event.target.username.value;
        const password = event.target.password.value;
        try {
            const response = await axios.post('/api/auth', { username, password });
            // Handle response, close popup, etc.
        } catch (error) {
            console.error('Login failed:', error);
            // Handle error
        }
    };
    const handleRegister = async (event) => {
        event.preventDefault();
        // Gather your form data
        const username = event.target.username.value;
        const password = event.target.password.value;
        try {
            const response = await axios.post('/api/users', { username, password });
            // Handle successful registration (e.g., show success message, close popup)
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration error (e.g., show error message)
        }
    };

    return (
        <div className="login-popup">
            <div className="login-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <img src={westernLogo} alt="Western Logo" className="westernLogo" />

                {isLoginView ? (
                    <>
                        <h2 style={{ marginBottom: "30px" }}>Sign in</h2>
                        <p>Use your User Account</p>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="username" name="username" style={{ marginBottom: "30px" }} placeholder="username" />
                                <input type="password" name="password" placeholder="password" />
                                <p className="forgot-email">Forgot username?</p>
                            </div>
                            <div className="form-group action-buttons">
                                <Button variant="outline-primary" type="button" className="create-account" onClick={() => setIsLoginView(false)}>Create account</Button>
                                <Button variant="outline-primary" type="submit" className="loginButton">Login</Button>
                            </div>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 style={{ marginBottom: "30px" }}>Create Account</h2>
                        <p>Register for a new account</p>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <input type="username" name="username" style={{ marginBottom: "30px" }} placeholder="5-20 characters username" />
                                <input type="password" name="password" placeholder="at least 5 characters for password" />
                            </div>
                            <div className="form-group action-buttons">
                                <Button variant="outline-success" type="submit" className="signupBtn">Sign up</Button>
                            </div>
                        </form>
                        <Button variant="outline-primary" className="backtoLogin" onClick={() => setIsLoginView(true)}>Back to login</Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginPopup;



