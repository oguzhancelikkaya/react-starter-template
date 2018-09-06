'use strict'; 
import React from 'react'; 

class NewMovie extends React.Component {
	constructor(props) {                                       
		super(props);
		this.state = {
			movie: {name:'',description:'',year:''}
		}
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(process,e){
		this.state.movie[process] = e.target.value;
		this.setState({
			movie: this.state.movie
		});
	}
	
	render() {
			return (
				<div className="container">
					<div className="form-group">
						<label>Name:</label> <input type="text" className="form-control" onChange={this.handleChange.bind(this,"name")} />
					</div>
					<div className="form-group">
						<label>Year:</label> <input type="text" className="form-control" onChange={this.handleChange.bind(this,"year")} />
					</div>
					<div className="form-group">
						<label>Description:</label> <textarea type="text" className="form-control" onChange={this.handleChange.bind(this,"description")}></textarea>
					</div>
					<div className="form-group">
						<button className="btn btn-success" onClick={this.props.saveMovie.bind(this,this.state.movie)}>Save Movie</button>
					</div>	
				</div>
				
			);
	}
}

export default NewMovie;