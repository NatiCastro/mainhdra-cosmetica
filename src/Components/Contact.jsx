import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Contact.css';
import Presentation from './Presentation';


export default function Contacto () {

    return (
        <>
        <Presentation />     
            <div className='container-whapp'>
                <a href='https://tinyurl.com/2nseb6z8' target='_blank' rel="noopener noreferrer"><WhatsAppIcon style={{ fontSize: 60 }} className='icon-whapp'>
                </WhatsAppIcon></a>
            </div> 
        </>
    )
}