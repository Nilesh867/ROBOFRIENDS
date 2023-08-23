import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield :''
		}
	}


componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response =>response.json())

	.then(users => {this.setState({robots:users})}
	);
}

onsearchchange = (event) => {

	this.setState({searchfield : event.target.value })
	
	
}

render(){
	const {robots, searchfield} = this.state;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	if(robots.length===0){
		return <h1>Loading</h1>}
	else{
	return (
	<div className='tc'>
	<h1 className='f1'>RoboFriends</h1>
	<Searchbox searchchange = {this.onsearchchange}/>
	<Scroll>
	<ErrorBoundary>
	<Cardlist robots = {filteredRobots}/>
	</ErrorBoundary></Scroll>
		</div>
		);
	}}
}



export default App;

