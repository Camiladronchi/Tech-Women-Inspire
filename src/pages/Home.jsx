import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import twi from '../images/twi.svg'
import '../style/Home.css'

export function Home(){

    return(
        <>
            <Navbar/>
            <div className='home-foto'>
                <img src={twi} alt="Foto TechWomenInspirate" />
            </div>
            <div className='home-frase'>
                <h1> Ela programa, ela lidera, ela inspira. </h1>
            </div>
        </>
    );
}