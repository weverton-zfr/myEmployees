import { useEffect, useState } from "react"
import axios from "axios"

import Card from "components/Card"
import Container from "components/Container"

const Home = () => {

    const [employess, setEmployees] = useState([])

    const getEmployees = () => {
        axios.get('http://localhost:8000/employee')
        .then(data => setEmployees(data.data))
        .catch(error => console.log(error))
    }

    useEffect(() => getEmployees,[])

    console.log(employess)

    return (
            <Container type='ctCards'>
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
)}

export default Home