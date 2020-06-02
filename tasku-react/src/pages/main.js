import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

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
        <h1>
        <span className="mainH1">Let's make more </span>
        <span className="green">time </span>
        <br></br>
        <span className="mainH1">for the things </span>
        <span className="mainH1">we care about.</span>
        </h1>
        <br />
        <Paper component="form" className={classes.root}>
        <SearchIcon></SearchIcon>
        <InputBase
            className={classes.input}
            placeholder="Search for Taskers"
            inputProps={{ 'aria-label': 'search for taskers' }}
        />
        <Button variant="contained" color="primary" className="filledButton">Search</Button>
        </Paper>
        <h5 className="mainH1">Popular: </h5>
        </Grid>
    );
}

export default Main