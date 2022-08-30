import React from 'react';
import Presentation from './Presentation';
import Footer from './Footer';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <>
            <Presentation />
            <div className='container-home'>
                <Link to={'/productos'}>
            <img 
                    src="https://firebasestorage.googleapis.com/v0/b/tienda-mainhdra.appspot.com/o/imagenes-mainhdra%2Flimp-sonrisa.jpg?alt=media&token=3ca91e29-fb68-431b-b299-9a393b51abaf"
                    className='img-home'
                    alt='Limpieza facial'
                />              
                </Link>
                <Link to={'/productos'}>
                 <img 
                    src="https://firebasestorage.googleapis.com/v0/b/tienda-mainhdra.appspot.com/o/imagenes-mainhdra%2Ffrasco-crema.jpg?alt=media&token=c2650c24-7c32-4eb3-a3d0-31c6b9a49014"
                    className='img-home'
                    alt='crema facial'
                />
                </Link>
                <Link to={'/servicios'}>
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/tienda-mainhdra.appspot.com/o/imagenes-mainhdra%2Flimp-facial2.jpg?alt=media&token=768c4f48-8bf3-460c-9b4b-06ac5d35bff1"
                    className='img-home'
                    alt='jabón artesanal'
                />
                </Link>              
            </div>
            <Footer />
        </>
    )
}