import React from 'react';
import {StyleRoot} from 'radium';

class Trends extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			trend: props.items
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({
			trend: nextProps.items ? nextProps.items : null			
		});
		
	}

	render(){


		var styles = {
			labeler: {
				display: 'inline-block',
				position: 'relative',
				fontSize: '11px',
				fontWeight: '600!important',
				textTransform: 'uppercase',
				width: '100%',

					'@media (min-width: 768px)': {
						width: '75%'
					},

					'@media (min-width: 1440px)': {
						width: '90%',
						fontSize: '14px',
						top: '-6px'
					}


			}
		}


		var trendy = [];
		var iterator = 0;

		for(var item in this.state.trend){

			trendy.push(

				<div className="prodtrends" style={{'position': 'relative', 'height': '80px', 'overflow': 'hidden', 'display': 'inline-block', 'boxSizing': 'border-box'}} key={iterator}>

					<p style={{'display': 'block', 'position': 'relative', 'fontSize': window.screen.width === 1440 ? '41px' : '31px', 'color': '#4cb02d', 'margin': '0', 'padding': '5px', 'fontWeight':'200!important'}}>{this.state.trend[item]}%</p>

					<label style={[styles.labeler]}>{item}</label>

				</div>

				);

			iterator++

		};

		return (
				<StyleRoot>
					<div className="trenddiv">
						{trendy}
					</div>
				</StyleRoot>
			);

	}
}


export default Trends;