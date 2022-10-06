import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'

const Paises = ({actualizarPais}) => {
    const [listaPaises, setListaPaises] = useState([])
    //console.log(listaPaises)

    useEffect(() => {
        const actualizarLista = async() => {
            // const actualizado = await cargarLista()
            // setListaPaises(actualizado)
            setListaPaises(await cargarLista())
        }
        actualizarLista()
    }, [])

    const cargarLista = async() => {
        try {
            const resp = await axios.get('https://covid19.mathdro.id/api/countries')
            const lista = resp.data.countries.map(pais => pais.name)
            return lista
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <Form.Group>
            <Form.Label>Elija un Pais</Form.Label>
            <Form.Control as='select'onChange={e => actualizarPais(e.target.value)}>
                    <option value='pais'>Pais</option>
                    {
                        listaPaises.map((pais, i) => <option key={i} value={pais}>{pais}</option>)
                    }
            </Form.Control>
        </Form.Group>
    </div>
  )
}

export default Paises