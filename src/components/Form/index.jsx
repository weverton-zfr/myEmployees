import FormGroup from 'components/FormGroup'
import styles from './Form.module.css'

const Form = ({value, children, handleChange, onSubmit, titleText}) => {
    
    
    return (
        <>
        <div className={styles.sumaryEmployee}>
            <h1>{titleText}</h1>
            <img src={value.photo} alt="Foto do Funcionario" />
            <p>
            </p>
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
            
            <FormGroup 
                lblText="Nome"  
                lblName='name'
                type="text"
                value={value.name}
                onChange={handleChange}
            />
            <FormGroup 
                lblText="Cargo"  
                lblName='position'
                type="text"
                value={value.position}
                onChange={handleChange}
            />
            <FormGroup 
                lblText="Idade"  
                lblName='age'
                type="number"
                value={value.age}
                onChange={handleChange}
            />
            <FormGroup 
                lblText="Salario" 
                lblName='salary' 
                type="number"
                value={value.salary}
                onChange={handleChange}
            />
            <FormGroup 
                lblText="E-mail"  
                lblName='email'
                type="email"
                value={value.email}
                onChange={handleChange}
            />
            <FormGroup 
                lblText="Telefone" 
                lblName='telefone'
                type="number"
                value={value.telefone}
                onChange={handleChange}
            />
            <div className={styles.buttonForm}>
                {children}
            </div>
        </form>
        </>
    )
}

export default Form