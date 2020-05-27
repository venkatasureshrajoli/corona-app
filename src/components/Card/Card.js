import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Countup from 'react-countup';

import styles from './Card.module.css';

export default function SimpleCard({title, colorVariant, count, message}) {
  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography  color={colorVariant} gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          <Countup duration={5} end={count} separator=","
          />
        </Typography>
        <Typography variant="body2" component="p">
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Info...</Button>
      </CardActions>
    </Card>
  );
}