import Container from "components/Container"
import styles from "./Home.module.css"

import Header from "components/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import Card from "components/Card"
import Button from "components/Button"
import NewEmployee from "components/NewEmployee"

const Home = () => {
    const [employess, setEmployees] = useState([])
    const [visibility, setVisibility] = useState(false)

    const getEmployees = () => {
        axios.get('http://localhost:8000/employee')
        .then(data => setEmployees(data.data))
        .catch(error => console.log(error))
    }

    const changeVisibility = () => setVisibility(!visibility)

    useEffect(() => getEmployees,[])

    return (
        <>
        <Header/>
        <section className={styles.welcome}>
            <p>
                O Employees é uma plataforma web desenvolvida para oferecer uma solução moderna e eficiente no gerenciamento de funcionários.
                Permite cadastrar, consultar, atualizar e remover informações de colaboradores de forma simples e centralizada, garantindo agilidade e precisão na gestão de dados. Com um design intuitivo e fácil de usar, o sistema facilita o trabalho de gestores e pode ser integrado a outros sistemas corporativos, tornando-se uma ferramenta versátil e escalável para empresas de qualquer porte.
            </p>
            <img src="src/img/disk.svg" alt="Imagem de uma pasta de arquivos" />
        </section>
        <Container type="ctCard">
            <h2 id="start">Veja alguns de seus funcionarios</h2>
            <Container type="card">
            {
                    employess.slice(0,4).map(data => [
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
            <p>Gerencie seus funcionarios de forma facil e rapida</p>
            <Button
                color="seeMore"
                text="Ver todos funcionarios"
                to="/employees"
            />
            <Button
                color="greenButton"
                text="Novo funcionario"
                onClick={changeVisibility}
            />    
            </Container>
            <NewEmployee 
                visibility={visibility? 'ctNewEmployeeShow' : 'ctNewEmployeeHidden' }
                onClick={changeVisibility}
            >
            </NewEmployee>
        </>
)}

export default Home