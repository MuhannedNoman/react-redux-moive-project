import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/Home/home';

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
		</div>
	);
}

export default App;
