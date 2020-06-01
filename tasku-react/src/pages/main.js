import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
  }));

const Main = ({ setPage }) => {
    const classes = useStyles();

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
        <Paper component="form" className={classes.root}>
        <InputBase
            className={classes.input}
            placeholder="Search for Taskers"
            inputProps={{ 'aria-label': 'search for taskers' }}
        />
        </Paper>
        </Grid>
    );
}

export default Main