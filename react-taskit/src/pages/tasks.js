import React from 'react'
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase/app';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

//* Material Ui imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Badge from 'react-bootstrap/Badge'
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { auth,db } from './firebaseConfig'

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;
var taskCount = 0;

class Tasks extends React.Component {
    state = {
        tasks:null
    }

    componentDidMount(){
        console.log('mounted')
        db.collection('tasks')
            .get()
            .then( snapshot => {
                const tasks = []
                snapshot.forEach( doc => {
                    taskCount += 1;
                    const data = doc.data()
                    tasks.push(data)
                })
                this.setState( { tasks: tasks })

            })
            .catch( error => console.log(error))
    }

    render(){
        var taskText = <p className="taskCount">{ taskCount }</p>;
        return (
            <FadeIn>
            <br></br>
            <div className="App" style={{
                paddingLeft: '30px',
                paddingRight: '30px'
            }}>
            <h1 class="mainH1" class="grad">Tasks in your area <Badge>{ taskText }</Badge></h1>
                <br></br>
                {
                    this.state.tasks &&
                    this.state.tasks.map( tasks => {
                        return (
                            <FadeIn>
                            <Jumbotron>    
                            <div>
                                <Card style={{ width: '20rem' }}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            {tasks.title}
                                        </Typography>
                                        <Typography>
                                            Category: {tasks.category}
                                        </Typography>
                                        <Typography>
                                            Offer: {tasks.offer}€
                                        </Typography>
                                        <Typography>
                                            City: {tasks.city}
                                        </Typography>
                                        <Typography>
                                            Address: {tasks.address}
                                        </Typography>
                                        <Typography>
                                            Posted by: {tasks.usrName}
                                        </Typography>
                                        <br />
                                    </CardContent>
                                    <CardActions>
                                    <Button size="small">Show on map</Button>
                                    </CardActions>
                                </Card>
                                <br></br>
                            </div>
                            <Card style={{ width: '20rem', padding: '10px' }}>
                            <p>{tasks.description}</p>
                            </Card>
                            </Jumbotron>
                            </FadeIn>
                        )
                    })
                } 
            </div>
            </FadeIn>
        )
    }
}

export default Tasks