import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../Styles/Contact.css';
import Presentation from './Presentation';


export default function Contacto () {

    return (
        <>
        <Presentation />
            <div className='container-contacto'>      
            <div className='container-mail'>
            <a href='https://es-la.facebook.com/mainhdracosmetica/' target='_blank'>
                <InstagramIcon style={{ fontSize: 40 }} className='icon-mail'></InstagramIcon>
            </a>
            <a href='https://es-la.facebook.com/mainhdracosmetica/' target='_blank'>
                <FacebookIcon style={{ fontSize: 40 }}></FacebookIcon>
            </a>
            </div>     
            <div className='container-whapp'>
                <a href='https://alvo.chat/V1' target='_blank'><WhatsAppIcon style={{ fontSize: 60 }} className='icon-whapp'>
                </WhatsAppIcon></a>
            </div>           
        </div>
        </>
    )
}