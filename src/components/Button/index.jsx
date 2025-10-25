import styles from './Button.module.css';

const Button = ({ onClick, text, type}) => {
  return (
    <button className={styles[type]} onClick={onClick}>    
        {text}
    </button>
  );
}
export default Button;