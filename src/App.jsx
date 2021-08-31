import React from 'react';
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';

// Components
import Home from './components/Home';

function App() {
  // access dispatch function
  // const dispatch = useDispatch();
  // const count = useSelector(state => state.count);

  return (
    <>
     <Home/>
   
      {/* <button onClick={() => dispatch({type: 'inc'})} type='submit'>Increase</button> */}
    </>
  );
}

export default App;
