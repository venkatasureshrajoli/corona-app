import React, { useEffect , useState } from 'react';
import styles from './Chart.module.css';
import { fetchDailyWiseData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Chart = (props) => {
    const [dailyState, setDailyState]  = useState([]);
    console.log("Props are", props);
    useEffect(()=>{
        const fetchAPI = async () =>{
            const response = await fetchDailyWiseData();
            setDailyState(response);
        }
        if(!props.country){
            fetchAPI();
        }
    },[]);
    const newData = {
        labels: dailyState.map((day)=>day.reportDate),
        datasets: [
            {
                label: 'Infected',
                data: dailyState.map((day)=>day.confirmed.total),
                borderColor: 'rgba(0,255,0,0.5)',
                fill:true
            },
            {
                label: 'Deaths',
                data: dailyState.map((day)=>day.deaths.total),
                borderColor: 'rgba(255,0,0,0.5)',
                fill:true
            }
        ]
    }

    const LineChart = (
        dailyState && dailyState.length>0 && dailyState[0].confirmed && <Line width={650} data={newData} options={
            {title:{
                display:true,
                text:"Covid-19 Cases Global Wise Daily Chart"}
            }
        }
        />
    );

    const BarData=() => {
        return ({
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
            {
                label: 'People',
                backgroundColor: ['rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)','rgba(0,255,0,0.5'],
                data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value],
                fill:true,
                order:0
            }
        ]
    })};

    const BarChart = (
        props.country ? (<Bar data={BarData()} options={{title:{display:true, text:"Country Wise Covid-19 Cases Bar Chart"}}}
        />) : null
    );

    return (<div className={styles.container}>
        {props.country ? BarChart : LineChart}
    </div>)
}

export default Chart;