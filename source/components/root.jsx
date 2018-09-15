'use strict';
import React from "react";
import Menu from './Menu';


class Root extends React.Component {
	render() {
			return (
				<div className="container">
						<div className="navbar">
							<Menu/>
						</div>
						<div className="row">
								{this.props.children}
						</div>
				</div>
			);
	}
}


export default Root;
