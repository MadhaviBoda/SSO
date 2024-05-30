import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sso } from './sso';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginForm.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const Service = sso();
            const response = await Service.login(username, password); // Send username and password directly
            localStorage.setItem('token', response.token); // Assuming response structure is { token: '...' }
            console.log(response);
            navigate('/protected');
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid credentials');
        }
    };

    return (
        <div className="wrapper">
            {/* <h2>Enterprise SSO System</h2> Add the heading here */}
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                <button type="submit">Login</button>
                <div className="forgot-password">
                    <a href="/forget-password">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
};

export default Login;

