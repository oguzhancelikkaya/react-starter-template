'use strict'; 
import React from 'react'; 
import { render } from 'react-dom'; 
const App = React.createClass({ 
	render() { 
		return ( 
			<section> 
				<h1>React Starter App</h1> 
				<p>Hello React!</p> 
			</section> ); 
	} 
}); 
render ( <App />, document.getElementById('container') );

