import axios from "axios";
import Button from "components/Button";
import Card from "components/Card";
import Container from "components/Container";
import NewEmployee from "components/NewEmployee";
import { useEffect, useState } from "react";

const Employees = () => {
    const [limite, setLimite] = useState(8);
    const [employees, setEmployees] = useState([]);
    const [visibility, setVisibility] = useState(false)

    const getEmployee = () => {
        axios.get('http://localhost:8000/employee')
        .then(data => setEmployees(data.data))
        .catch(error => console.log(error))
    }
    
    const changeVisibility = () => setVisibility(!visibility)

    useEffect(() => getEmployee,[])

    return (
        <Container type="ctCard">
            <h1>Todos Funcionários</h1>
            <Container type="ctEmployees">
            {
                employees.slice(0,limite).map(data => [
                    <Card
                    id={data.id}
                    key={data.id}
                    photo={data.photo}
                    name={data.name}
                    position={data.position}
                    salary={data.salary}
                    age={data.age}
                    />
                ])
            }
            </Container>
            {
                limite < employees.length &&
                <Button 
                onClick={() => setLimite(limite + 4)}
                color="seeMore"
                text='Ver mais'
                />
            }

            <Button
                color="greenButton"
                text="Novo funcionario"
                onClick={changeVisibility}
            />    
            <NewEmployee 
                visibility={visibility? 'ctNewEmployeeShow' : 'ctNewEmployeeHidden' }
                onClick={changeVisibility}
            />
        </Container>
            
    )
}   

export default Employees