import React, { Component } from 'react';
import CatComponent from 'src';
import GraceHopperQuoteComponent from 'src';
import MouseComponent from 'src';

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
