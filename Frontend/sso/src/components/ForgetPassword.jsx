import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sso } from './sso';
import './ForgetPassword.css';

const ForgetPassword = () => {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const Service = sso();
            await Service.resetPassword(username, newPassword); // Changed to username
            alert('Password updated successfully');
            navigate('/');
        } catch (error) {
            console.error('Password reset error:', error);
            alert('Error resetting password');
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleResetPassword}>
                <h1>Reset Password</h1>
                <div className="input-box">
                    <input
                        type="text" // Changed to text input
                        placeholder="Username" // Changed placeholder to Username
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgetPassword;
