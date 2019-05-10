import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { API_URL } from '../../config';
import Weather from '../../components/Weather';
import DotsLoading from '../../components/DotsLoading';

const socket = io(API_URL);

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
  },
  title: {
    color: '#1E88E5',
    textAlign: 'center',
    padding: theme.spacing.unit * 4,
  },
  loading: {
    padding: theme.spacing.unit * 8,
  }
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
          <Typography className={classes.title} variant="h4" component="h4">
            TEMPERATURA Y HORA
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        {cities.length === 0 &&
          <Grid className={classes.loading} container justify="center">
            <DotsLoading />
          </Grid>
        }
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
