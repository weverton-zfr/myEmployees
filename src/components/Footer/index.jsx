import styles from "./Footer.module.css"
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className={styles.Footer}>
            <p>©2025 MyEmployees. All rights reserved.</p>
            <div>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
            <div>
                <p>Follow me on:</p>
                <a href="#"><FaLinkedin/></a>
                <a href="#"><FaGithubSquare/></a>
                <a href="#"><FaInstagramSquare/></a>
            </div>
            <div>
                <p>Contact us:</p>
            </div>
        </footer>
    )
}

export default Footer