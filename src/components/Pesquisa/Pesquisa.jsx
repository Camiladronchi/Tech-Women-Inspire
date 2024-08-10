import './Pesquisa.css';

export function Pesquisa() {
    return (
        <div className="Pesquisa">
            <button className="Pesquisa-botao"> <i class="fa-solid fa-magnifying-glass"></i> </button>
            <input className="Pesquisa-input" type="text" placeholder="Pesquisar..." />
        </div>
    );
}