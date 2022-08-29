import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import logo from "../Images/logo-nc.png";
//import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import "../Styles/AppBar.css";


const theme = createTheme({
  palette: {
    primary: {
      main: red[50],
    },
    secondary: {
      main: '#f8bbd0',
    },
  },
});

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
      <ThemeProvider theme={theme}>
    <AppBar position="fixed" color='primary' >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MAINHDRA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <Container className="container-responsive-navbar" sx={{width: 250}}>
                    <Link to={'/'} className="link-nav-responsive">
                    <Typography textAlign="center">Home</Typography></Link>
                    <Link to={'/categoria/mainhdra'} className="link-nav-responsive">
                    <Typography textAlign="center">Mainhdra</Typography></Link>
                    <Link to={'/categoria/miradror'} className="link-nav-responsive">
                    <Typography textAlign="center">Miradror</Typography></Link>
                    <Link to={'/servicios'} className="link-nav-responsive">
                    <Typography textAlign="center">Servicios</Typography></Link>
                    <Link to={'/contacto'} className="link-nav-responsive">
                    <Typography textAlign="center">Contacto</Typography></Link>
                </Container>
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 6,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           MAINHDRA
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            <Link to={'/'} className="link-nav">Home</Link>
            <Link to={'/categoria/mainhdra'} className="link-nav">Mainhdra</Link>
            <Link to={'/categoria/miradror'} className="link-nav">Miradror</Link>
            <Link to={'/servicios'} className="link-nav">Servicios</Link>
            <Link to={'/contacto'} className="link-nav">Contacto</Link>
          </Box>
          <img className='logo-nc' src={logo} alt="" />
          {/* <a href='https://tinyurl.com/2nseb6z8' target='_blank' rel="noopener noreferrer">
            <WhatsAppIcon className="icon-whapp-appbar" style={{ fontSize: 30 }}></WhatsAppIcon>
          </a> */}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
