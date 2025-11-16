import styles from './NewEmployee.module.css'

import Button from "components/Button";
import Form from "components/Form"

import { useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

const NewEmployee = ({visibility, onClick, children}) => {
    const [employee, setEmployee ] = useState(
        {
        "id": nanoid(8),
        "name": "",
        "age": null,
        "position": "",
        "salary": null,
        "email": "",
        "telefone": null,
        "photo": "https://picsum.photos/280/200"
        }
    )

    const handleChange = (e) => {
    const { name, value } = e.target;
    const type = e.target.type;
    type === 'number' ?
    setEmployee((prev) => ({...prev, [name]: Number(value)}))
    :
    setEmployee((prev) => ({ ...prev, [name]: value }));
    console.log(employee)
    };

    const submitNewEmployee = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/employee', employee)
        .then(() => {
            alert(employee.name + ' cadastrado com sucesso!')
            window.location.reload();
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    }

    return(
        <div className={styles[visibility]}>
            {children}
            <div className={styles.NewEmployee}>
                <Form 
                value={employee} 
                handleChange={handleChange} 
                onSubmit={submitNewEmployee}
                titleText="Novo Funcionario">
                    <Button 
                        type="submit" 
                        color="greenButton" 
                        text="Cadastrar"
                    />
                    <Button
                        type='reset'
                        color="redButton"
                        text="Cancelar"
                        onClick={onClick}
                    /> 
                </Form>
            </div>
        </div>
    )
}

export default NewEmployee