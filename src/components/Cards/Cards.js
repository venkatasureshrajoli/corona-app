import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../Card/Card';
import styles from './Cards.module.css';
const Cards = ({data: {confirmed, recovered, deaths}}) => {
    if(!confirmed || !confirmed.value){
        return 'Loading...';
    }
    return (
        <div>
            <Grid className={styles.container} 
                 >
                    <Card title="Infected" colorVariant="primary" count={confirmed.value} message="The number of infected covid-19 cases." />
                    <Card title="Recovered" colorVariant="secondary" count={recovered.value} message="The number of recovered covid-19 cases." />
                    <Card title="Deaths" colorVariant="error" count={deaths.value} message="The number of deaths caused by covid-19" />
            </Grid>
        </div>
    )
}

export default Cards;