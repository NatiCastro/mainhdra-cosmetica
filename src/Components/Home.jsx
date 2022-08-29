import React from 'react';
import Presentation from './Presentation';
import Footer from './Footer';
import '../Styles/Home.css';

export default function Home() {

    return (
        <>
            <Presentation />
            <div className='container-home'>
            <img 
                    src='https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg'
                    className='img-home'
                    alt='Limpieza facial'
                />
                <img 
                    src="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg"
                    className='img-home'
                    alt='masaje con piedras'
                />
                <img 
                    src="https://images.pexels.com/photos/4210657/pexels-photo-4210657.jpeg"
                    className='img-home'
                    alt='radiofrecuencia'
                />
            </div>
            <Footer />
        </>
    )
}