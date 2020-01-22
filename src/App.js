import React from 'react';
import './App.css';
import BasicList from './components/BasicList/BasicList';

function App() {
	return (
		<div className="App">
			<BasicList listData={['apple', 'pear', 'banana', 'kiwi']} />
		</div>
	);
}

export default App;
