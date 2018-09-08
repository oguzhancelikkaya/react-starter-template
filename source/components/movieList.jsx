'use strict'; 
import React from 'react'; 
import { render } from 'react-dom'; 
import NewMovie from './NewMovie';
import ChangeMovie from './ChangeMovie';
import Menu from './Menu';

var movies = [
	{
	id:0,	
  	name: 'Back to the Future',
    description: 'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity.',
	changed:0,
	year: 1985
  },
  {
	id:1,
  	name: 'Matrix',
    description: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir.',
	changed:0,
	year:1999
  },
  {
	id:2,  
  	name: 'Batman',
    description: 'His above average reflexes and hand-eye-coordination make him the most proficient archer ever known.',
	changed:0,
	year:2005
  }
  
];

class MovieList extends React.Component {
	constructor(props) {                                       
		super(props);
		this.state = {
			isChange: false,
			newMovie: false,
			movies: movies,
			selectedMovie: movies[0]
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.newMovie = this.newMovie.bind(this);
		this.saveMovie = this.saveMovie.bind(this);
		this.deleteMovie = this.deleteMovie.bind(this);
	}
	
	handleClick(id) {
		this.state.movies[id].changed += 1;
		this.setState({
			movies: this.state.movies,
			selectedMovie : this.state.movies[id],
			isChange : true,
			newMovie : false
		});
	}
	
	newMovie() {
		this.setState({
			isChange : false,
			newMovie : true
		});
	}
	
	handleChange(process,id,e){ 
		this.state.movies[id][process] = e.target.value;
		this.setState({
			movies: this.state.movies
		});
	}
	
	saveMovie(movie){
		movie.changed = 0;
		movie.id = this.state.movies.length;
		this.state.movies.push(movie);
		this.setState({
			movies: this.state.movies,
			newMovie : false
		});
	}
	
	deleteMovie(id){
		delete this.state.movies[id];
		this.setState({
			movies: this.state.movies,
			isChange : false
		});
	}	
	
	render() {
		let changeMovie = "";
		let newMovie = "";
		if(this.state.isChange){
			changeMovie = <ChangeMovie movie={this.state.selectedMovie} changeFunction={this.handleChange} deleteMovie={this.deleteMovie} changeMode={this.state.isChange}/>
		}
		if(this.state.newMovie){
			newMovie = <NewMovie saveMovie={this.saveMovie}/>
		}
		return (
		<div className="container">
			<div className="navbar">
				<Menu/>
			</div>
			<div className="container">
				<div className="row">
					<ul className="list-group">
					{this.state.movies.map((roll,i) => {
						let boundItemClick = this.handleClick.bind(this, roll.id);
						return <li className="list-group-item" key={i}>{roll.name} ({roll.year}) <button className="btn btn-default btn-xs pull-right" onClick={boundItemClick}>
							Change {this.state.movies[roll.id].changed}
						</button></li> 
					}
					)}
					</ul>
					<div className="form-group">
						<button className="btn btn-primary" onClick={this.newMovie}>Add New Movie</button>
					</div>	
					{changeMovie}
					{newMovie}
				</div>
			</div>
		</div>
		);
	}
}

export default MovieList;