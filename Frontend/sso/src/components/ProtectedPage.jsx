// src/components/ProtectedPage.js
import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const ProtectedPage = () => {
    console.log('ProtectedPage rendered');
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Enterprise Single Sign-On (SSO) System
            </Typography>
            <Typography variant="body1" paragraph>
                An Enterprise Single Sign-On (SSO) system is a centralized authentication solution designed to provide seamless access to multiple applications within an organization using a single set of credentials. Unlike traditional SSO systems, which are primarily focused on enabling users to access applications across different domains or service providers, Enterprise SSO systems are tailored specifically for the needs of large organizations.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Key Features:
            </Typography>
            <Box>
                <Paper elevation={3} sx={{ p: 2, bgcolor: '#f0f0f0' }}>
                    <Typography variant="h6" gutterBottom>
                        Centralized Authentication
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Users authenticate themselves once using their credentials (such as username and password), and the SSO system manages the authentication process across all integrated applications. This simplifies the user experience and reduces the burden of managing multiple login credentials.
                    </Typography>
                </Paper>
            </Box>
            <Box>
                <Paper elevation={3} sx={{ p: 2, bgcolor: '#A0DEFF' }}>
                    <Typography variant="h6" gutterBottom>
                        Integration with Enterprise Identity Management
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Enterprise SSO systems are typically integrated with an organization's identity management infrastructure, such as Active Directory or LDAP (Lightweight Directory Access Protocol), to ensure consistent user authentication and authorization. This integration streamlines user management and ensures security compliance.
                    </Typography>
                </Paper>
            </Box>
            <Box>
                <Paper elevation={3} sx={{ p: 2, bgcolor: '#fafafa' }}>
                    <Typography variant="h6" gutterBottom>
                        Support for Various Authentication Methods
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Enterprise SSO systems often support multiple authentication methods to accommodate different security requirements and user preferences. These methods may include username/password, multi-factor authentication (MFA), biometric authentication, and smart card authentication. This flexibility enables organizations to adapt their authentication mechanisms based on their security policies and user needs.
                    </Typography>
                </Paper>
            </Box>
            {/* Repeat similar structure for other key features */}
        </Box>
    );
};

export default ProtectedPage;


