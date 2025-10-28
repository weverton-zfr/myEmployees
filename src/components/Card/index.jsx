import styles from './Card.module.css'
import { Link } from 'react-router-dom'
const Card = ({id, photo, name, lastName, position, salary, age}) => {
    return(
        <Link to={`/employee/${id}`} className={styles.linkCard}>
            <div className={styles.Card}>
                <div className={styles.imgGroup}>
                    <img src={photo} alt="Foto do Funcionario" />
                </div>
                <div className={styles.nameGroup}>
                    <h3>{name}</h3>
                </div>
                <div className={styles.dataGroup}>
                    <h4>
                        Cargo: {position}
                    </h4>
                    <h4>
                        Salário: {salary}
                    </h4>
                    <h4>
                        Idade: {age}
                    </h4>
                </div>
            </div>
        </Link>
    )
}

export default Card