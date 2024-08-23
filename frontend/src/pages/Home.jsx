import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import twi from '../images/twi.svg'
import '../style/Home.css'

export function Home(){
    
    console.log("Teste")
    return(
        <>
            <Navbar/>
            <div className='home-foto'>
                <img src={twi} alt="Foto TechWomenInspirate" />
            </div>
            <div className='home-frase'>
                <h1> Ela programa, ela lidera, ela inspira. </h1>
            </div>
            <Footer/>
        </>
    );
}