import FormGroup from 'components/FormGroup'
import styles from './Form.module.css'
import Button from 'components/Button'
import { use, useState } from 'react';

const Form = ({value}) => {
    
    const [employee, setEmployee] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <>
        <div className={styles.sumaryEmployee}>
            <h1>Sobre o Funcionário</h1>
            <img src={value.photo} alt="Foto do Funcionario" />
            <p>
                {value.about}
            </p>
        </div>
        <form className={styles.form} onSubmit={e => e.preventDefault()}>
            
            <FormGroup 
                lblName="Nome" 
                type="text"
                value={value.name}
                onChange={handleChange}
            />
            <FormGroup 
                lblName="Cargo" 
                type="text"
                value={value.position}
                onChange={handleChange}
            />
            <FormGroup 
                lblName="Idade" 
                type="number"
                value={value.age}
                onChange={handleChange}
            />
            <FormGroup 
                lblName="Salario" 
                type="number"
                value={value.salary}
                onChange={handleChange}
            />
            <FormGroup 
                lblName="E-mail" 
                type="email"
                value={value.email}
                onChange={handleChange}
            />
            <FormGroup 
                lblName="Telefone" 
                type="number"
                value={value.telefone}
                onChange={handleChange}
            />
            <FormGroup 
                lblName="Casado" 
                type="radio"
                value={value.married}
            />
            <div className={styles.buttonForm}>
                <Button styleName="update" text="Alterar"/>
                <Button styleName="delete" text="Deletar"/>
            </div>
        </form>
        </>
    )
}

export default Form