import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chocolate from './Chocolate';
import Chips from './Chips';
import Icecream from './Icecream';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path='/chocolate'>
						<Chocolate />
					</Route>
					<Route path='/chips'>
						<Chips />
					</Route>
					<Route path='/icecream'>
						<Icecream />
					</Route>
					<Route exact path='/'>
						<VendingMachine />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
