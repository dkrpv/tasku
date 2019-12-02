import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

const myTask = ({ setPage }) => (
  <div className="profile">
  <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
    <Alert variant="dark"
      style={{
        height: '60vh',
        width: '70vh',
      }}
    >
      <Alert.Heading>Your Tasks</Alert.Heading>
      <p>
        You have no tasks. <Alert.Link onClick={() => setPage('createTask')}>Create</Alert.Link> one now!
      </p>
      <hr />
      <p className="mb-0">
        Before creating tasks, please read our <Alert.Link>Terms And Conditions</Alert.Link>.
      </p>
  </Alert>
  </div>
  </div>
)

export default myTask
