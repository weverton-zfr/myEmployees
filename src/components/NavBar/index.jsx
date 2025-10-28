import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = () => {
    return(
        <nav className={styles.NavBar}>
            <span><Link to="/">Employlees</Link></span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/employees">Funcionarios</Link></li>
                <li><Link to="/positions">Cargos</Link></li>
                <li><Link to="/about">Sobre nós</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar