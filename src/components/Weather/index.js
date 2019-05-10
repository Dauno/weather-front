import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { getFlag } from '../../utils';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

function weather({ classes, data, name }) {
  return (
    <Card className={classes.card} spacing={16}>
      <CardActionArea>
        <CardMedia
          alt={name}
          title={name}
          height="140"
          component="img"
          image={getFlag(name)}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            Hora: {data.time}
          </Typography>
          <Typography variant="h6" component="h1">
            Temperatura
          </Typography>
          <Typography component="p">
            Celsius: {data.temperature.celsius}º
          </Typography>
          <Typography component="p">
            Fahrenheit: {data.temperature.fahrenheit}º
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(weather);
