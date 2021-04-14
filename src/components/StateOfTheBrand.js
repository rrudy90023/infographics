import React from 'react';
import List from './List';
import {StyleRoot} from 'radium';

class StateOfTheBrand extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){

		var styles = {
			mobile: {
				backgroundColor: '#ffffff',
				position:	'relative', 
				textAlign:	'center',
				height: 	'auto',
				padding: 	'0 0 80px 0',
				listStyleType: 'none',
				margin: '0 0 100px 0',
				display: 'block',
				fontSize: '16px',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 -4px 7px rgba(0, 0, 0, 0.2)',
				top: '60px',
				width: '100%',

					'@media (min-width: 768px)': {
						width: '80%'
					}
			}
		}

		return (
			<StyleRoot>
				<div style={[styles.mobile]} className="stateb">
					<List title="State of the Brand" items={this.state.data} />
				</div>
			</StyleRoot>
		);
	}
}

export default StateOfTheBrand;