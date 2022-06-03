import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../Styles/Contact.css';


export default function Contacto () {

    return (
        <>
        <div className='container-contacto'>
            <h1>Contacto</h1>
            
            <div className='container-whapp'>
                <WhatsAppIcon className='icon-whapp'>
                </WhatsAppIcon>
                <p>11-4027-0228</p>
            </div>
            <div className='container-mail'>
            <MailOutlineIcon className='icon-mail'>
            </MailOutlineIcon>
            <p>mainhdracosmetica@gmail.com.ar</p>
            </div>
        </div>
        </>
    )
}