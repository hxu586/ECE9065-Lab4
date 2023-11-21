import './LoginPopup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import westernLogo from './western_logo.webp';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase'; // Adjust the path to your firebase.js
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


const LoginPopup = ({ onClose }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Login successful
            console.log("success");
            setMessage('Logged in successfully.'); // Set success message
            setTimeout(() => {
                setMessage(''); // Clear message after 3 seconds
                onClose(); // Close the popup
            }, 300);
            navigate('/search'); // Navigate to the search page
        } catch (error) {
            console.error('Login failed:', error);
            setMessage(`Login failed: ${error.message}`); // Set error message
        }
    };


    const handleRegister = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Registration successful
            console.log("success");
            setMessage('Registration successful. You can now log in.'); // Set success message
            setTimeout(() => {
                setMessage(''); // Clear message after 3 seconds
                setIsLoginView(true); // Switch back to login view
            }, 3000);
        } catch (error) {
            console.error('Registration failed:', error);
            setMessage(`Registration failed: ${error.message}`); // Set error message
        }
    };



    return (
        <div className="login-popup">
            <div className="login-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <img src={westernLogo} alt="Western Logo" className="westernLogo" />
                {message && <div className="message">{message}</div>}

                {isLoginView ? (
                    <>
                        <h2 style={{ marginBottom: "30px" }}>Sign in</h2>
                        <p>Use your User Account</p>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="email" name="email" style={{ marginBottom: "30px" }} placeholder="Email" required />
                                <input type="password" name="password" placeholder="password" required />
                                <p className="forgot-email">Forgot username?</p>
                            </div>
                            <div className="form-group action-buttons">
                                <Button variant="outline-primary" type="submit" className="loginButton">Login</Button>
                                <Button variant="outline-primary" type="button" className="create-account" onClick={() => setIsLoginView(false)}>Create account</Button>
                            </div>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 style={{ marginBottom: "30px" }}>Create Account</h2>
                        <p>Register for a new account</p>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <input type="email" name="email" style={{ marginBottom: "30px" }} placeholder="Email" required />
                                <input type="password" name="password" placeholder="at least 5 characters for password" required />
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



