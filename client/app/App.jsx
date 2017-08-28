import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<div>
				Hello World
			</div>
		)
	}
}

export default App;