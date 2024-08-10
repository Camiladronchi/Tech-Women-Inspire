import React from 'react';
import '../style/Oportunidades.css'
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { CardVagas } from '../components/CardVagas/CardVagas';
import { Pesquisa } from '../components/Pesquisa/Pesquisa';

export function Oportunidades(){

    const vagas = [
        {nomeVaga: "Cientista de dados", nomeEmpresa: "Google", nomeCidade: "São Paulo"},
        {nomeVaga: "Cientista de dados", nomeEmpresa: "Google", nomeCidade: "São Paulo"},
        {nomeVaga: "Cientista de dados", nomeEmpresa: "Google", nomeCidade: "São Paulo"},
        {nomeVaga: "Cientista de dados", nomeEmpresa: "Google", nomeCidade: "São Paulo"},
        {nomeVaga: "Cientista de dados", nomeEmpresa: "Google", nomeCidade: "São Paulo"},
        {nomeVaga: "Cientista de dados", nomeEmpresa: "Google", nomeCidade: "São Paulo"},
        {nomeVaga: "Cientista de dados", nomeEmpresa: "Google", nomeCidade: "São Paulo"},
        {nomeVaga: "Cientista de dados", nomeEmpresa: "Google", nomeCidade: "São Paulo"},
        {nomeVaga: "Cientista de dados", nomeEmpresa: "Google", nomeCidade: "São Paulo"},
    ]

    return(
        <div className='Oportunidades'> 
            <Navbar/>
            <div className='Oportunidades-barra-pesquisa-fundo'>
                <div className='Oportunidades-barra-pesquisa'>
                    <Pesquisa/>
                </div>
            </div>
            <div className='Oportunidades-fundo-cards'>
                
                <div className='Oportunidades-cards'>
                    {vagas.map((item) => (
                        <CardVagas nomeVaga={item.nomeVaga} nomeEmpresa={item.nomeEmpresa} nomeCidade={item.nomeCidade} />
                    ))}
                </div>
            
            </div>
            <Footer/>
        </div>
        
    )
}