
import NavBar from '../folders/00016React/covid19/componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Paises from '../folders/00016React/covid19/componentes/Paises';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../folders/00016React/covid19/componentes/Cards';
import Grafico from '../folders/00016React/covid19/componentes/Grafico';



const App = () => {
    const [pais, setPais] = useState('')
    //console.log(pais)
    const [data, setData] = useState({})
    //console.log(data)

    useEffect(() => {
        const actualizarData = async() => {
            const apiData = await(fetchDatos(pais))
            setData(apiData)
        }
        actualizarData()
    }, [pais])

    const actualizarPais = async (dato) => {
        setPais(await dato)
    }

    const fetchDatos = async(dato2) => {
        let url = ''
        if(dato2 === '' || dato2 === 'Pais'){
            url='https://covid19.mathdro.id/api'
        }else{
            url=`https://covid19.mathdro.id/api/countries/${dato2}`
        }
        try {
            const resp = await axios.get(url)
            return resp
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xl={2}>
                    <Paises actualizarPais={actualizarPais}/>
                    </Col>
                    <Col xl={8}>
                    <Grafico data={data} pais={pais}/>
                    </Col>
                    <Col xl={2}>
                    <Cards data={data} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default App;