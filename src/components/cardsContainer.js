import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    background: '#D4DEFF',
    borderRadius: '30px',
    marginRight: 25
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    color: '#5E81F4',
  },
  pos: {
    marginBottom: 14,
    color: '#989DBD',
  },
});

const CardsContainer = () => {
  const classes = useStyles();
  return (
    <div style={{marginBottom: '70px'}}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary"
                        gutterBottom>
              Device ID
            </Typography>
            <Typography variant="h5" component="h2">
              a9fg-5tg3-ht56-ui34f
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Change
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary"
                        gutterBottom>
              Device type
            </Typography>
            <Typography variant="h5" component="h2">
              iPhone X, iOS 13.1
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Change
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary"
                        gutterBottom>
              Report type
            </Typography>
            <Typography variant="h5" component="h2">
              Last session
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Change
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary"
                        gutterBottom>
              Period
            </Typography>
            <Typography variant="h5" component="h2">
              11.31-11.45 28.04.2021
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Change
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default CardsContainer;
