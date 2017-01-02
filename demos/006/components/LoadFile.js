import React, { Component } from 'react';

export default class extends Component {

	constructor(props){
		super(props);
		this.state = {
			json: ''
		};
		this.loadJson = this.loadJson.bind(this);
	}

	getJson(callback) {
		require.ensure([], require => {
			let json = require('../temp/data.json');
			callback(json);
		});
	}

	loadJson(){
		this.getJson(json => {
			console.log(json)
			this.setState({ json: JSON.stringify(json) });
		})
	}


	render(){

		return (
			<div>
				<button onClick={ e => this.loadJson()}>Load JSON by 'require.ensure()' </button>
				{' '}
				<div>{ this.state.json }</div>
			</div>
		)
	}
}
