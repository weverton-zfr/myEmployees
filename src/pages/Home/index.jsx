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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo aliquam perspiciatis molestiae dolores similique. Ipsa tempore nulla voluptas repellendus commodi, inventore, incidunt explicabo, tempora ea cum doloremque ex nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo aliquam perspiciatis molestiae dolores similique. Ipsa tempore nulla voluptas repellendus commodi, inventore, incidunt explicabo, tempora ea cum doloremque ex nisi.</p>
            <img src="src/img/disk.svg" alt="Imagem de uma pasta de arquivos" />
        </section>
        <Container type="ctCard">
            <h2>Veja alguns de nossos funcionarios</h2>
            <Container type="card">
            {
                    employess.map(data => [
                        <Card
                        key={data.id}
                        photo={data.photo}
                        name={data.name}
                        lastName={data.lastName}
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
            />
        </Container>
        </>
)}

export default Home