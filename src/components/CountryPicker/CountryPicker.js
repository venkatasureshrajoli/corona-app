import React, { useEffect, useState } from 'react';
import { NativeSelect } from '@material-ui/core';
import { fetchCountriesList } from '../../api';

const CountryPicker = (props) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetchCountriesList();
            setCountries(response.countries);
        }
        fetchAPI();
    }, [])
    return (<div>
        <NativeSelect onChange={(e) => props.handleCountryChange(e.target.value)} defaultValue={props.country}>
            <option value="">Global</option>
            {countries.map((country) => <option key={country.name} value={country.name}>{country.name} </option>)}
        </NativeSelect>
    </div>)
}

export default CountryPicker;