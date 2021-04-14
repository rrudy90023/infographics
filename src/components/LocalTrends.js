import React from 'react';
import List from './List';
import {StyleRoot} from 'radium';

class LocalTrends extends React.Component {

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
				marginLeft: 'auto',
				marginRight: 'auto',
				display: 'block',
				fontSize: '16px',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 -4px 7px rgba(0, 0, 0, 0.2)',
				marginBottom: '100px',
				top: '-14px',
				width: '100%',

					'@media (min-width: 768px)': {
						width: '80%'
					}
			}
		}

		return (
			<StyleRoot>
				<div style={[styles.mobile]} className="locot">
					<List title="Local Trends" items={this.state.data} />
				</div>
			</StyleRoot>
		);
	}
}

export default LocalTrends;