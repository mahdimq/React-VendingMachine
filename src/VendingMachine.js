import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import vendingMachine from './images/30751.jpg';
import './VendingMachine.css';

function VendingMachine() {
	return (
		<div>
			<h1>Vending Machine</h1>
			<div className='row'>
				<div className='col'>
					<img src={vendingMachine} alt='Vending Machine' />
				</div>
				<div className='col'>
					<p>Hello I am a Vending Machine. What would you like to eat?</p>
					<p>
						<Link to='/chocolate'>Chocolate</Link>
					</p>
					<p>
						<Link to='/chips'>Chips</Link>
					</p>
					<p>
						<Link to='/icecream'>Icecream</Link>
					</p>
				</div>
			</div>
			<small>
				<a href='http://www.freepik.com'>Picture designed by macrovector / Freepik</a>
			</small>
		</div>
	);
}

export default VendingMachine;
