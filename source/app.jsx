'use strict'; 
import React from 'react'; 
import { render } from 'react-dom'; 

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
				<div className="component">
					<div>
						<label>Name:</label> <input type="text" onChange={this.handleChange.bind(this,"name")} />
					</div>
					<div>
						<label>Year:</label> <input type="text" onChange={this.handleChange.bind(this,"year")} />
					</div>
					<div>
						<label>Description:</label> <textarea type="text" onChange={this.handleChange.bind(this,"description")}></textarea>
					</div>
					<button onClick={this.props.saveMovie.bind(this,this.state.movie)}>Save Movie</button>
				</div>
				
			);
	}
}

class ChangeMovie extends React.Component {
	render() {
			return (
				<div className="component">
					<div>
						<label>Name:</label> <input type="text" value={this.props.movie.name || ''} onChange={this.props.changeFunction.bind(this,"name",this.props.movie.id)}/>
					</div>
					<div>
						<label>Year:</label> <input type="text" value={this.props.movie.year || ''} onChange={this.props.changeFunction.bind(this,"year",this.props.movie.id)}/>
					</div>
					<div>
						<label>Description:</label> <textarea type="text" value={this.props.movie.description || ''} onChange={this.props.changeFunction.bind(this,"description",this.props.movie.id)}></textarea>
					</div>
					<button onClick={this.props.deleteMovie.bind(this,this.props.movie.id)}>Delete Movie</button>
				</div>
			);
	}
}

class MovieList extends React.Component {
	constructor(props) {                                       
		super(props);
		this.state = {
			isChange: false,
			newMovie: false,
			movies: this.props.movieList,
			selectedMovie: this.props.movieList[0]
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
		<div className="component">
			{this.state.movies.map((roll,i) => {
				let boundItemClick = this.handleClick.bind(this, roll.id);
				return <li key={i}>{roll.name} ({roll.year}) <button onClick={boundItemClick}>
					Change {this.state.movies[roll.id].changed}
				</button></li> 
			}
			)}
			<button onClick={this.newMovie}>Add New Movie</button>
			{changeMovie}
			{newMovie}
		</div>
		);
	}
}

render(<MovieList movieList={movies} />, document.getElementById("root"));

