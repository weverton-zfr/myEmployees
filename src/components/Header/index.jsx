import Button from 'components/Button';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>Employee Management System</h1>
        <h2>Gerencie seus funcionarios</h2>
        <Button 
        styleName="start"
        text="Comecar"
        />
    </header>
  );
}  

export default Header;