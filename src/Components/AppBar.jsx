import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { purple, grey } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import "../Styles/AppBar.css";


const theme = createTheme({
  palette: {
    primary: {
      main: purple[50],
    },
    secondary: {
      main: '#f8bbd0',
    },
  },
});


const pages = ['Home', 'Mainhdra', 'Miradror', 'Servicios', 'Contacto'];
const pagesProducts = ['Cremas', 'Aceites', 'Jabones'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //Submenu productos
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
         
              {/* {pages.map((page) => ( */}
              <Container className="container-responsive-navbar" sx={{width: 300}}>
                {/* <MenuItem onClick={handleCloseNavMenu}> */}
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
                  {/* <Typography textAlign="center">{page}</Typography> */}
                {/* </MenuItem> */}
                </Container>
              {/* ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
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
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            {/* {pages.map((p)=> (
            <MenuItem key={p} onClick={handleCloseNavMenu}>
            <Link to={'/'}  className="link-nav">
            <Typography textAlign="center">{p}</Typography></Link>
            </MenuItem>
            ))} */}
            

            {/*Submenu productos  */}
            {/* <Button aria-controls="simple-menu" aria-haspopup="true" color="primary" className="button-nav" onClick={handleClick}>
              Productos
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to={'/productos'}>
              <MenuItem onClick={handleClose}>Cremas</MenuItem></Link>
              <Link to={'/productos'} className="link-nav">
              <MenuItem onClick={handleClose}>Aceites</MenuItem></Link>
              <Link to={'/productos'} className="link-nav">
              <MenuItem onClick={handleClose}>Jabones</MenuItem></Link>
            </Menu> */}
            <Link to={'/'} className="link-nav">Home</Link>
            <Link to={'/categoria/mainhdra'} className="link-nav">Mainhdra</Link>
            <Link to={'/categoria/miradror'} className="link-nav">Miradror</Link>
            <Link to={'/servicios'} className="link-nav">Servicios</Link>
            <Link to={'/contacto'} className="link-nav">Contacto</Link>
          </Box>
{/* 
          <Box sx={{ flexGrow: 0 }}>
          <Link to={'/'}><LocalMallIcon sx={{ color: grey[900] }} fontSize="large"></LocalMallIcon></Link>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
