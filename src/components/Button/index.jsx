import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ onClick, text, type, to, target}) => {
  return (
    <button className={styles[type]} onClick={onClick}>
      <Link to={to} target={target}> 
        {text}
      </Link>   
    </button>
  );
}
export default Button;