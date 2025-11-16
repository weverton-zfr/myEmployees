import styles from './FormGroup.module.css'

const FormGroup = ({lblText, lblName, type, value, onChange}) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={lblName}>{lblText}:</label>
            <input type={type} id={lblName} name={lblName} defaultValue={value} onChange={onChange}/>
        </div>
    )
}
export default FormGroup