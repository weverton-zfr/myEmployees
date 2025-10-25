import styles from './Card.module.css'
const Card = ({photo, name, lastName, position, salary, age}) => {
    return(
        <div className={styles.Card}>
            <div className={styles.imgGroup}>
                <img src={photo} alt="Foto do Funcionario" />
            </div>
            <div className={styles.nameGroup}>
                <h3>{name}</h3>
                <h3>{lastName}</h3>
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
    )
}

export default Card