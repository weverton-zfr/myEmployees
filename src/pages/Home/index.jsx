import Container from "components/Container"
import styles from "./Home.module.css"

import Header from "components/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import Card from "components/Card"
import Button from "components/Button"

const Home = () => {
    const [employess, setEmployees] = useState([])

    const getEmployees = () => {
        axios.get('http://localhost:8000/employee')
        .then(data => setEmployees(data.data))
        .catch(error => console.log(error))
    }

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
            <h2>Veja alguns de seus funcionarios</h2>
            <Container type="card">
            {
                    employess.map(data => [
                        <Card
                        key={data.id}
                        photo={data.photo}
                        name={data.name}
                        lastName={data.LastName}
                        position={data.position}
                        salary={data.salary}
                        age={data.age}
                        />
                    ])
                }
            </Container>
            <p>Gerencie seus funcionarios de forma facil e rapida</p>
            <Button
            type="seeMore"
            text="Ver todos funcionarios"
            to="/employees"
            />
        </Container>
        </>
)}

export default Home