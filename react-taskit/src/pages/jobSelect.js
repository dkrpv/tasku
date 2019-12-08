import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Avatar from '@material-ui/core/Avatar';

//* Material UI Icons
import PetsIcon from '@material-ui/icons/Pets';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ComputerIcon from '@material-ui/icons/Computer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WeekendIcon from '@material-ui/icons/Weekend';
import HouseIcon from '@material-ui/icons/House';

//* Material UI imports
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

  export default function Chips() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <tbody>
        <table class="jobs">
        <h2 class="title">Select Your Tasks</h2>
        <div class="newLayer">
        <Chip avatar={<Avatar><PetsIcon fontSize="small"></PetsIcon></Avatar>} label="Dog" onClick={null} />
        <Chip avatar={<Avatar><HouseIcon fontSize="small"></HouseIcon></Avatar>} label="Cleaning" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lawnmowing" onClick={null} />
        <Chip avatar={<Avatar><ShoppingCartIcon fontSize="small"></ShoppingCartIcon></Avatar>} label="Shopping" onClick={null} />
        <Chip avatar={<Avatar><WeekendIcon fontSize="small"></WeekendIcon></Avatar>} label="Furniture" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>I</Avatar>} label="Ipsum" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar><ComputerIcon fontSize="small"></ComputerIcon></Avatar>} label="IT Assistance" onClick={null} />
        <Chip avatar={<Avatar><ChildCareIcon fontSize="small"></ChildCareIcon></Avatar>} label="Child Care" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        </div>
        <div class="newLayer">
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        </div>
        <div class="newLayer">
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        </div>
        <div class="newLayer">
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        <Chip avatar={<Avatar>L</Avatar>} label="Lorem" onClick={null} />
        </div>
        </table>
        </tbody>
      </div>
    );
  }