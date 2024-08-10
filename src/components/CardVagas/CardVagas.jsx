import './CardVagas.css'

export function CardVagas({nomeVaga, nomeEmpresa, nomeCidade}){
    return(
        <div className='Card-vagas'>
            <h2>{nomeVaga}</h2>
            <h3>{nomeEmpresa}</h3>
            <h3>{nomeCidade}</h3>
        </div>
    )
}