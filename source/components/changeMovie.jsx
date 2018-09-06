'use strict'; 
import React from 'react'; 

class ChangeMovie extends React.Component {
	render() {
			return (
				<div className="container">
					<div className="form-group">
						<label>Name:</label> <input type="text" className="form-control" value={this.props.movie.name || ''} onChange={this.props.changeFunction.bind(this,"name",this.props.movie.id)}/>
					</div>
					<div className="form-group">
						<label>Year:</label> <input type="text" className="form-control" value={this.props.movie.year || ''} onChange={this.props.changeFunction.bind(this,"year",this.props.movie.id)}/>
					</div>
					<div className="form-group">
						<label>Description:</label> <textarea type="text" className="form-control" value={this.props.movie.description || ''} onChange={this.props.changeFunction.bind(this,"description",this.props.movie.id)}></textarea>
					</div>
					<div className="form-group">
						<button className="btn btn-warning" onClick={this.props.deleteMovie.bind(this,this.props.movie.id)}>Delete Movie</button>
					</div>	
				</div>
			);
	}
}


export default ChangeMovie;