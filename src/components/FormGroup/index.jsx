import styles from './FormGroup.module.css'

const FormGroup = ({lblName, type, value, onChange}) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={lblName}>{lblName}:</label>
            {type === 'radio' ? (
                <>
                    <input type="radio" id={lblName} name={lblName} defaultChecked={value === true}/>
                    <label htmlFor={lblName}>Sim</label>
                    <input type="radio" id={lblName} name={lblName} defaultChecked={value === false}/>
                    <label htmlFor={lblName}>Não</label>
                </>
            ) : (
                <input type={type} id={lblName} name={lblName} defaultValue={value} onChange={onChange}/>
            )}
        </div>
    )
}
export default FormGroup