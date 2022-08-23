import React from 'react';
import Presentation from './Presentation';
import '../Styles/Home.css';

export default function Home() {

    return (
        <>
            <Presentation />
            <div className='container-home'>
            <img 
                    src='https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2020/04/limpieza-facial-casa-eliminar-puntos-negros.jpg'
                    className='img-home'
                    alt='Limpieza facial'
                />
                <img 
                    src="https://www.saludterapia.com/images/saludterapia/general/9480/masaje-termal2.jpg"
                    className='img-home'
                    alt='masaje con piedras'
                />
                <img 
                    src="https://germainegoyamadrid.com/wp-content/uploads/2016/11/Radiofrecuencia-corporal-gluteos-Deepheat-Sorisa_265x209.jpg"
                    className='img-home'
                    alt='radiofrecuencia'
                />
            </div>
        </>
    )
}