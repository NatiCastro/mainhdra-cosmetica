import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Contact.css';
import Presentation from './Presentation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Contacto () {

    return (
        <>
        <Presentation />   
            <div className="contact__redes">
                <a href='https://www.instagram.com/mainhdracosmetica/' target='_blank' rel="noopener noreferrer">
                <InstagramIcon style={{ fontSize: 35 }}></InstagramIcon>
                </a>
                <a href='https://es-la.facebook.com/mainhdracosmetica/' target='_blank' rel="noopener noreferrer">
                    <FacebookIcon style={{ fontSize: 35 }}></FacebookIcon>
                </a>
                </div>
                <div className='container-mail'>
                <MailOutlineIcon />
                <span>mainhdracosmetica@gmail.com</span>
            </div>  
            <div className='container-whapp'>
                <a href='https://tinyurl.com/2nseb6z8' target='_blank' rel="noopener noreferrer"><WhatsAppIcon style={{ fontSize: 60 }} className='icon-whapp'>
                </WhatsAppIcon></a>
            </div> 
        </>
    )
}