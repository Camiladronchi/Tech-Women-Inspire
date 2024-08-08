import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png'

import './Navbar.css'

export function Navbar(){

    return(
        <header>
            <nav className="navbar">
                <Link to={'/'}><img src={logo} alt="Logo TechWomenInspirate"/></Link>
                <Link to={'/'}><h1>HOME</h1></Link>
                <Link to={'/SobreProjeto'}><h1>SOBRE O PROJETO</h1></Link>
                <Link to={'/Oportunidades'}><h1>OPORTUNIDADES</h1></Link>
            </nav>
        </header>
    );
    
}