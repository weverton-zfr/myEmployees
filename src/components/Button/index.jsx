import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ onClick, text, color, to, target, type}) => {
  return (
    <>
      {
        to == undefined ?
        <button className={`${styles[color]} ${styles.allButtons}`} onClick={onClick} type={type}>
          {text}
        </button>
        :
        
        <Link to={to} target={target}> 
          <button className={`${styles[color]} ${styles.allButtons}`} onClick={onClick} type={type}>
            {text}
          </button>
        </Link>
      }
    </>
  );
}
export default Button;