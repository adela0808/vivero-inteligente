import { Link } from "react-router-dom";
import '../assets/css/components/barraNavegacion.css';

const BarraNav = ()=>{
    return(
        <nav className="navbar">
            <ul className="menu-items">
                <li><Link className='buton_barra' to="/">Inicio</Link></li>
                <li><Link className='buton_barra' to="/codigo-arduino">Código del Arduino </Link></li>
                <li> <Link className='buton_barra' to="/circuito">Conexión</Link>  </li>
            </ul>
        </nav>
    )
}

export default BarraNav