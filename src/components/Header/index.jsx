import Button from 'components/Button';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>Employee Management System</h1>
        <h2>Gerencie seus funcionarios</h2>
        <a href="#start">
          <Button 
          color="start"
          text="Comecar"
          />
        </a>
        
    </header>
  );
}  

export default Header;