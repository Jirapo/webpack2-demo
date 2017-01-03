import React, { Component } from 'react';

export default class extends Component {

	constructor(props){
		super(props);
		this.state = {
			time: ''
		};
	}

	async loadTime(){
		let moment = await import('moment');

		const time = moment().format('MMMM Do YYYY, h:mm:ss a');
		this.setState({ time });
	}

	render(){

		return (
			<div style={{ marginBottom: '20px' }}>
				<button onClick={ e => this.loadTime()}>Load Time by 'import()' </button>
				{' '}
				<div>{ this.state.time }</div>
			</div>
		)
	}
}
