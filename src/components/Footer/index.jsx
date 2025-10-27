import { Link } from "react-router-dom";
import styles from "./Footer.module.css"
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className={styles.Footer}>
            <p>©2025 MyEmployees. All rights reserved.</p>
            <div className={styles.footerInfo}>
                <Link to="privacy-police">Privacy Policy</Link>
                <Link to="terms-of-service">Terms of Service</Link>
            </div>
            <p>Follow me on:</p>
            <div className={styles.footerSocial}>
                <Link to="https://www.linkedin.com/in/weverton-pereira-ribeiro-58534a388" target="_blank"><FaLinkedin/></Link>
                <Link to="https://github.com/weverton-zfr" target="_blank"><FaGithubSquare/></Link>
                <Link to="https://www.instagram.com/weverton_zfr/" target="_blank"><FaInstagramSquare/></Link>
            </div>
        </footer>
    )
}

export default Footer