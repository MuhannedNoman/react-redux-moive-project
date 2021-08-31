import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <h1 className="text-primary">Bootstrap checked</h1>
      <p>Centered text with Sass(checked)</p>
      <Button variant="primary">React Bootstrap checked</Button>
    </div>
  );
}

export default App;
