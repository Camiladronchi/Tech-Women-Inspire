import React from 'react';
import '../style/Oportunidades.css'
import { Navbar } from '../components/Navbar/Navbar';

export function Oportunidades(){
    return(
        <div className='Oportunidades'> 
            <Navbar/>
            <div className='Oportunidades-barra-pesquisa'>

                <select></select>
                <select></select>
                <select></select>

            </div>
        </div>
        
    )
}