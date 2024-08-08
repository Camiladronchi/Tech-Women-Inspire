import React from 'react';
import '../style/Oportunidades.css'
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

export function Oportunidades(){
    return(
        <div className='Oportunidades'> 
            <Navbar/>
            <div className='Oportunidades-barra-pesquisa'>

                <select></select>
                <select></select>
                <select></select>

            </div>
            <Footer/>
        </div>
        
    )
}