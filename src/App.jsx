import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Home from './components/Home';

function App() {
  // access dispatch function
  const dispatch = useDispatch();
  // useSelector returns the value of the state
  // stucture of the state: {count: 0}
  const count = useSelector(state => state.count);

  return (
    <>
     <Home/>
      {/* Demo of how to access the state */}
    
           // next time don't push ur demo 🔫

      <h1>{count}</h1>
      <button onClick={() => dispatch({type: 'inc'})} type='submit'>Increase</button>
    </>
  );
}

export default App;
