import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Weather from '../../components/Weather';

const socket = io('https://weather-api-rlab.herokuapp.com');

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
  },
  title: {
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
  },
});

function App({ classes }) {
  const [data, setData] = useState({});

  useEffect(() => {
    socket.on('citiesData', (resp) => {
      setData(resp);
    });
  }, [data]);

  const cities = Object.keys(data);

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2" component="h2">
            Temperatura y Hora
          </Typography>
        </Grid>
      </Grid>
      {cities.length === 0 &&
        <Typography className={classes.title} variant="h3" component="h3">
          Cargando
        </Typography>
      }
      <Grid container spacing={24}>
        {cities.map((city) => (
          <Grid item xs key={city}>
            <Weather name={city} data={data[city]} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
