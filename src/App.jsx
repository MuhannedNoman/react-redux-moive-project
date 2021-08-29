import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // access dispatch function
  const dispatch = useDispatch();
  // useSelector returns the value of the state
  // stucture of the state: {count: 0}
  const count = useSelector(state => state.count);

  return (
    <>
      {/* Demo of how to access the state */}
      <h1>{count}</h1>
      <button onClick={() => dispatch({type: 'inc'})} type='submit'>Increase</button>
    </>
  );
}

export default App;
