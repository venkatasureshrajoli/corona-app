import React, { Component } from 'react';

import {Cards, Chart, CountryPicker} from './components';

import styles from './App.module.css';

import { fetchCovidSummary } from './api';

import logo from './images/image.png';

class App extends Component {
    state = {
        data:{},
        country:""
    }
    componentDidMount(){
        this.fetchCovidSummaryApi();
    }

    fetchCovidSummaryApi(country){
        const fetchAPI = async ()=>{
            try{
                const data = await fetchCovidSummary(country);
                this.setState({data});   
            } catch (e){
                console.log('Failed to fetch the covid summary');
            }
        }
        fetchAPI();
    }

    handleCountryChange = (country)=>{
        this.setState({country:country});
        this.fetchCovidSummaryApi(country);
    }
    render(){
        return (
            <div className={styles.container}>
                <img src={logo} />
                <Cards data={this.state.data} />
                <CountryPicker country={this.state.country} handleCountryChange={this.handleCountryChange} />
                <Chart data={this.state.data} country ={this.state.country} />
            </div>
        )
    }
}


export default App;