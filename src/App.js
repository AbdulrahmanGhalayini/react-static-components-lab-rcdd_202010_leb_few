import React, { Component } from 'react';
import CatComponent from 'src/CatComponent.js';
import GraceHopperQuoteComponent from 'src/GraceHopperQuoteComponent.js';
import MouseComponent from 'src/MouseComponent.js';

class App extends Component {
	render() {

		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
