import React from 'react';

//* Material UI stuff
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: 60,
      height: 60,
    },
  }));

  export default function ImageAvatars({ source }) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Avatar src={source} className={classes.medium} />
      </div>
    );
  }