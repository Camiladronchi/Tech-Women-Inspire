import React from 'react';
import '../style/SobreProjeto.css'
import { Navbar } from '../components/Navbar/Navbar';
import icmc from '../images/icmc.png'
import logo from '../images/logo.png'
import wit from '../images/wit.png'

export function SobreProjeto(){
    return(
        <div className='Sobre-projeto'>
            <Navbar/>
            <div className='Sobre-projeto-quem-somos'>
                <div className='Sobre-projeto-quem-somos-texto'> 
                    <h1>QUEM SOMOS?</h1>
                    <h2>
                        Somos alunas da USP de São Carlos e estamos empenhadas em fortalecer a inclusão e a 
                        identificação de meninas na área de tecnologia. Nosso propósito é despertar e estimular o 
                        interesse delas, compartilhando nossa paixão e conhecimento sobre esse cargo.
                    </h2>
                </div>
                <img src={icmc} alt="Logo ICMC"/>
            </div>
            <div className='Sobre-projeto-sobre'>
                <div className='Sobre-projeto-sobre-texto'>
                    <h1>SOBRE O PROJETO:</h1>
                    <h2>
                        Entendemos o <strong style = {{"color":"#023E8A"}}>desafio</strong> que é estar em um ambiente predominantemente masculino e buscar ocupar seu 
                        espaço nele.  Por isso, queremos <strong style = {{"color":"#023E8A"}}>simplificar essa jornada</strong>, concentrando uma variedade de 
                        informações em um único site,  incluindo oportunidades de trabalho direcionadas à mulheres na 
                        área de tecnologia.
                    </h2>
                </div>
                
                <div className='Sobre-projeto-sobre-imagens'>
                    <img src={logo} alt="Logo Tech Women Inspire"/>
                    <img src={wit} alt="Logo WIT"/>
                </div>
            </div>
            
        </div>     
    )
}