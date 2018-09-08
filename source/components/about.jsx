'use strict'; 
import React from 'react'; 
import Menu from './Menu';

class About extends React.Component {

	
	render() {
			return (
				<div className="container">
					<div className="navbar">
						<Menu/>
					</div>					
					About Us
				</div>
				
			);
	}
}

export default About;