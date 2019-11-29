import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main';
import CreateTask from './pages/createTask';

const App = () => {
  const [page, setPage] = useState('main')
  return (
    <div className="App">
    {page === 'main' && <Main setPage={setPage} />}
    {page === 'createTask' && <CreateTask setPage={setPage} />}

    </div>
  );
}

export default App;
