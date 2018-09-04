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

class ChangeMovie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: this.props.movie
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(process,e){ 
		this.props.movie[process] = e.target.value;
		this.setState({movie: this.props.movie});
	}
	render() {
		return (
			<div className="component">
				<div>
					<label>Name:</label> <input type="text" value={this.props.movie.name || ''} onChange={this.handleChange.bind(this,"name")}/>
				</div>
				<div>
					<label>Year:</label> <input type="text" value={this.props.movie.year || ''} onChange={this.handleChange.bind(this,"year")}/>
				</div>
				<div>
					<label>Description:</label> <textarea type="text" value={this.props.movie.description || ''} onChange={this.handleChange.bind(this,"description")}></textarea>
				</div>
			</div>
		);
	}
}

class MovieList extends React.Component {
	constructor(props) {                                       
		super(props);
		this.state = {
			counter: 0,
			movies: this.props.movieList,
			selectedMovie: this.props.movieList[0]
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(id) {
		this.state.movies[id].changed += 1;
		this.setState({
			movies: this.state.movies,
			selectedMovie : this.state.movies[id]
		});
	}
	
	render() {
		return (
		<div className="component">
			{this.state.movies.map((roll,i) => {
				let boundItemClick = this.handleClick.bind(this, roll.id);
				return <li key={i}>{roll.name} ({roll.year}) <button onClick={boundItemClick}>
					Change {this.state.movies[roll.id].changed}
				</button></li> 
			}
			)}
			<ChangeMovie movie={this.state.selectedMovie}/>
		</div>
		);
	}
}

render(<MovieList movieList={movies} />, document.getElementById("root"));

