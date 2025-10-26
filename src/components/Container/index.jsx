import styles from './Container.module.css'

const Container = ({children, type}) => {
    return(
        <div className={styles[type]}>
            {children}
        </div>
    )
}

export default Container