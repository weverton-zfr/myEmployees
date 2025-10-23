import styles from './Card.module.css'
import img1 from 'img/teste1.jpg'
const Card = () => {
    return(
        <div className={styles.Card}>
            <div className={styles.imgGroup}>
                <img src={img1} alt="" />
            </div>
            <div className={styles.nameGroup}>
                <h3>Any</h3>
                <h3>Pereira Sales</h3>
            </div>
            <div className={styles.dataGroup}>
                <h4>
                    Cargo: aytsdfvyas
                </h4>
                <h4>
                    Salario: 12312
                </h4>
                <h4>
                    Idade: 12 Anos
                </h4>
            </div>
        </div>
    )
}

export default Card