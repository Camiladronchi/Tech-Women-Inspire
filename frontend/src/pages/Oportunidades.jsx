import React, { useState, useEffect } from 'react';
import '../style/Oportunidades.css';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { CardVagas } from '../components/CardVagas/CardVagas';
import { Pesquisa } from '../components/Pesquisa/Pesquisa';

function Oportunidades() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função assíncrona para fazer a requisição GET
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/oportunidades');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Armazena os dados retornados no estado
      } catch (error) {
        setError(error.message); // Armazena o erro no estado
      } finally {
        setLoading(false); // Indica que o carregamento terminou
      }
    };

    fetchData(); // Chama a função de fetch
  }, []); // O array vazio como dependência garante que o efeito só rode uma vez quando o componente for montado

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className='Oportunidades'>
      <Navbar />
      <div className='Oportunidades-barra-pesquisa-fundo'>
        <div className='Oportunidades-barra-pesquisa'>
          <Pesquisa />
        </div>
      </div>
      <div className='Oportunidades-fundo-cards'>
        {loading ? (
          <p>Buscando vagas...</p>
        ) : (
          <div className='Oportunidades-cards'>
            {jobs.map((item, index) => (
              <CardVagas
                key={index}
                nomeVaga={item.nomeVaga}
                nomeEmpresa={item.nomeEmpresa}
                nomeCidade={item.nomseCidade}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
