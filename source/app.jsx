'use strict'; 
import React from 'react'; 
import { render } from 'react-dom'; 
import MovieList from './components/MovieList';
import Menu from './components/Menu';
import About from './components/About';
import { Router, Route, browserHistory } from 'react-router'

class App extends React.Component {
	
	render() {
		return(
			<Router history={browserHistory}>
				<Route path={"/"} component={Menu}/>
				<Route path={"/movie-list"} component={MovieList}/>
				<Route path={"/about"} component={About}/>
			</Router>
		
		)
	}
}

render(<App/>, document.getElementById("root"));

