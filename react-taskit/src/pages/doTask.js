import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

const doTask = ({ setPage }) => (
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
      <Alert.Heading>Tasks in your Area</Alert.Heading>
      <p>
        There are no tasks available. <Alert.Link onClick={() => setPage('createTask')}>Create</Alert.Link> one now!
      </p>
      <hr />
      <p className="mb-0">
        Before doing tasks, please read our <Alert.Link>Terms And Conditions</Alert.Link>.
      </p>
  </Alert>
  </div>
  </div>
)

export default doTask
