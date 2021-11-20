import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { getAuth, signOut } from '@firebase/auth';
import { useNavigate } from 'react-router';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbar(props) {

  const   navigate=useNavigate()
  const auth=getAuth()
  let logout=()=>{
    signOut(auth)
    navigate('/login')
  }


  const theme=useTheme()
  const useStyles=makeStyles(()=>({
    navButton:{
      marginLeft:50
    },
  }))

  const classes=useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to Elevate App Bar
            </Typography>
            <Typography variant="h5" className={classes.navButton} component="Button" onClick={logout}>
              Sign out
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
      </Container>
    </React.Fragment>
  );
}
