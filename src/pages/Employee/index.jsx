import axios from "axios"
import Button from "components/Button"
import Container from "components/Container"
import Form from "components/Form"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Employee = () => {
    const {id} = useParams()
    const [employee, setEmployee ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/employee/${id}`)
        .then(data => setEmployee(data.data))
        .catch(error => console.log(error))
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        const type = e.target.type;
        type === 'number' ?
        setEmployee((prev) => ({...prev, [name]: Number(value)}))
        :
        setEmployee((prev) => ({ ...prev, [name]: value }));
        console.log(employee)
    };

    const deleteEmployee = () => {
        axios.delete(`http://localhost:8000/employee/${employee.id}`)
        .then(() => {
            alert(employee.name + ' deletado com sucesso!')
            window.location.reload()
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    }

    const patchEmployee = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/employee/${employee.id}`, employee)
        .then(() => {
            alert(employee.name + ' alterado com sucesso!')
            window.location.reload();
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });}


    return (
        <Container type="ctEmployee">
            <Form handleChange={handleChange} onSubmit={patchEmployee} value={employee} titleText="Sobre o Funcionário">
                <Button color="greenButton" text="Alterar"/>
                <Button color="redButton" text="Deletar" onClick={deleteEmployee} to='/'/>
            </Form>
        </Container>
    )
}

export default Employee