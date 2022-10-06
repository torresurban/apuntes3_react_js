import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';
import { Line, Doughnut } from 'react-chartjs-2'

const Grafico = ({data, pais}) => {
    const [datoDiario, setDatoDiario] = useState({})
    console.log(datoDiario)

    useEffect(() => {
        const actualizarEstado = async () => {
            const json = await cargarDatoDiario()
            setDatoDiario(json)
        }
        actualizarEstado()
    },[])
    
    const cargarDatoDiario = async() => {
        try {
            const resp = await axios.get('https://covid19.mathdro.id/api/daily')
            return resp
        } catch (error) {
            console.log(error)
        }
    }

    let chart;
    if(datoDiario.data && (pais === 'Pais' || pais === '')){
        chart = (
            <Line
                data={{
                    labels:datoDiario.data.map(e => e.reportDate),
                    datasets:[{
                        data:datoDiario.data.map(e => e.confirmed.total),
                        label:'Infectados',
                        borderColor:'red',
                        fill:true
                    },
                    {
                        data:datoDiario.data.map(e => e.deaths.total),
                        label:'Fallecidos',
                        borderColor:'black',
                        fill:true
                    }]
                }}
                options={{
                    legend:{
                        labels:{
                            fontColor:'black',
                            fontSize:18
                        }
                    },
                    title:{
                        display:true,
                        text:'Coronavirus',
                        fontColor:'black'
                    }
                }}
            />
        )
    }else if(data.data){
        chart=(
            <Doughnut
                data={{
                    labels:['Infectados', 'Recuperados', 'Fallecidos'],
                    datasets:[{
                        label:'Gente',
                        backgroundColor:[
                            'cornflowerblue',
                            'grey',
                            'red'
                        ],
                        data:[data.data.confirmed.value, data.data.recovered.value, data.data.deaths.value]
                    }]
                }}
                options={{
                    legend:{
                        display:true,
                        fontColor:'white'
                    },
                    title:{
                        display:true,
                        text:`Coranavirus en ${pais}`,
                        fontColor:'black'
                    }
                }}
            />
        )
    }

    if(!data.data){
        return '...cargando'
    }else{
        return (
            <div>{chart}</div>
          )
    }
}

export default Grafico