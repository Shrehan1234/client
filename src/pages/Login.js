import React from 'react';
import '../styles/Login.css';

const Login = () => {
    const handleGitHubLogin = () => {
        window.location.href = 'http://localhost:5000/auth/github';
    };

    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <button onClick={handleGitHubLogin} className="btn btn-primary">Sign in with GitHub</button>
        </div>
    );
};

export default Login;
