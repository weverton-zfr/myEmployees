import axios from "axios"
import Container from "components/Container"
import Form from "components/Form"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Employee = () => {
    const {id} = useParams()
    const [employee, setEmployee ] = useState([])
    const getEmployee = () => {
         axios.get(`http://localhost:8000/employee/${id}`)
        .then(data => setEmployee(data.data))
        .catch(error => console.log(error))
    }
    useEffect(() => {
        getEmployee()
    }, [])

    return (
        <Container type="ctEmployee">
            <Form value={employee}/>
        </Container>
    )
}

export default Employee