import React from 'react';
import { Button, Grid, Typography, AppBar, Toolbar, CssBaseline, Box } from '@mui/material';
import lanpage from './Assets/lanpage.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ marginBottom: '4rem' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            EnterPrise Single-Sign-On
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container sx={{ minHeight: '60vh' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={lanpage}
            alt="SSO illustration"
            style={{ maxWidth: '90%', width: '80%', height: 'auto', objectFit: 'contain' }}

          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: '2rem' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Enterprise-Single-Sign-On
          </Typography>
          <Typography variant="h5" component="h2" color="primary" gutterBottom>
            Seamless and Secure Access Management with Enterprise Single Sign-On System.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', mt: '1rem' }}>
            <Button component={Link} to={'/login'} variant="contained" color="primary" sx={{ m: '1rem' }}>
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: '5rem',
          padding: '1rem',
          backgroundColor: 'inherit',
        }}
      >
        <Typography variant="body2" color="textSecondary" align="center">
          For Assistance: sso-support@enterprise.com
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
