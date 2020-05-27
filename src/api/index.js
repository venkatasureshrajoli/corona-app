import axios from 'axios';
const URL = 'https://covid19.mathdro.id/api'
const dailyWiseURL = `${URL}/daily`;
const countriesListURL = `${URL}/countries`;

const fetchCovidSummary = async (country) => {
    let changedURL = URL;
    if(country){
        changedURL = `${URL}/countries/${country}`;
    }
    try {
        const response = await axios.get(changedURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const fetchDailyWiseData = async () => {
    try {
        const response = await axios.get(dailyWiseURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


const fetchCountriesList = async () => {
    try {
        const response = await axios.get(countriesListURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export { fetchCovidSummary, fetchDailyWiseData ,  fetchCountriesList };