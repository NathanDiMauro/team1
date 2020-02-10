import React from 'react';
import pf from './pf.js';
import miss from './images/no-Photo.jpg';
import './styles/adoptStyle.css';
import { Link } from 'react-router-dom';

//https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
// also used a lot of nates adopt page code

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
			//set defaults
			query: '',
            image: miss,
            name: "Loading...", 
            gender: "Loading...", 
            age: "Loading...",
            breed: "Loading...",
            link: "Loading...",
		}
	}

	getInfo = () => {

		/* declare variables */
		let len;
		
		pf.animal.search({type: this.state.query, status: "adoptable"})
        .then(resp =>{
			this.setState({
				//results: resp.data.animals
				name: resp.data.animals[this.props.index].name, 
                gender: resp.data.animals[this.props.index].gender, 
                age: resp.data.animals[this.props.index].age,
                breed: resp.data.animals[this.props.index].breeds.primary,
                link: resp.data.animals[this.props.index].url
			})

			/* get length of photos array */
			len=resp.data.animals[this.props.index].photos.length;

			/*if length > 1 get img*/
			if (len > 0)
			{
				//set image variable
				this.setState({
					image: resp.data.animals[this.props.index].photos[0].small
				})
			}
		})
	}

	handleInputChange = () => {
		this.setState({
			query: this.search.value
		})
	}

	render() {
		return (
			<div>
				<form>
					<input placeholder="Search here..." ref={input => this.search = input}/>
					<Link onClick={this.handleInputChange} to='/SearchResults'>Search</Link>
				</form>
				<div className="col" onClick={() => window.open(this.state.link)} onMouseOver={() => this.style="background-color: #292c34;"}>
					<a href={this.state.link} target="_blank" rel="noopener"></a>
					<h3>{this.state.name} is adoptable</h3>
					<img src={this.state.image} alt="Adoptable Dog" width="100" height="100"/>
					<p>{this.state.age} {this.state.gender} {this.state.breed}</p>
				</div>
			</div>
		)
	}
}

export default Search;