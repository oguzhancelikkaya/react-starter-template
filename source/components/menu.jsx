'use strict'; 
import React from "react";
import { Nav, NavItem, Navbar, Button } from "react-bootstrap";
import { Link } from 'react-router';
import { LinkContainer } from "react-router-bootstrap";


class Menu extends React.Component {
	render() {
			return (
				<Navbar inverse fixedTop> 
					<Navbar.Header> 
						<Navbar.Brand> 
							<Link to="/">Movie Wiki</Link> 
						</Navbar.Brand> 
						<Navbar.Toggle /> 
					</Navbar.Header>
					
					<Navbar.Collapse>
						<Nav> 
							<LinkContainer eventKey={1} to="/movie-list"> 
								<Button className="btn btn-link active"> Movies </Button> 
							</LinkContainer> 
							<LinkContainer eventKey={2} to="/about"> 
								<Button className="btn btn-link"> About </Button>
							</LinkContainer> 
						</Nav> 
					</Navbar.Collapse> 
				</Navbar> 
			);
	}
}


export default Menu;