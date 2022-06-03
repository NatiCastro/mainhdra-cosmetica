import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Footer.css';
import logo from "../Images/logo.png";
import Typography from '@mui/material/Typography';


export default function Footer () {

  return (
    <>
              <div className="footer__container">
                <div className="footer__redes">
                <Typography variant="body1">
                 <WhatsAppIcon className='icon-wapp'></WhatsAppIcon>
                  Whatsapp: 11-4027-0228
                </Typography>
                    {/* <a class="footer__links fab fa-instagram iconoInstagram"href="#"></a>
                    <a class="footer__links fab fa-facebook-square iconoFacebook" href="#"></a>
                    <a class="footer__links fab fa-youtube iconoYoutube" href="#"></a> */}
                  </div>
                  <div className="container-copyright">
                  <img className='logo-footer' src={logo} alt="" />
                  <h5> Copyright 2022 | Todos los derechos reservados</h5>
                  </div>
              </div>

    </>
  )
}





// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// //import Link from '@mui/material/Link';
// import { Link } from "react-router-dom";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import '../Styles/Footer.css';
// import logo from "../Images/logo.png";

// function Copyright() {
//   return (
//     <div className='container-copyright'> 
//       <img className='logo-footer' src={logo} alt="" />
//     <Typography variant="body2" color="text.secondary">
//       {'Copyright © '} 
     
//       <Link className='link-footer' to={"/"}>
//         Mainhdra Cosmética
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//     </div>
//   );
// }

// export default function StickyFooter() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         // minHeight: '100vh',
//       }}
//     >
//       <Box
//         component="footer"
//         sx={{
//           py: 3,
//           px: 2,
//           mt: 'auto',
//           backgroundColor: (theme) =>
//             theme.palette.mode === 'light'
//               ? theme.palette.grey[200]
//               : theme.palette.grey[800],
//         }}
//       >
//         <Container className='container-footer'>
//           <Container className='container-whapp'>
//           <Typography variant="body1">
//               <WhatsAppIcon className='icon-wapp'></WhatsAppIcon>
//               Whatsapp: 11-4027-0228
//           </Typography>
//           </Container>
//           <Copyright />
//         </Container>
        
//       </Box>
//     </Box>
//   );
// }

