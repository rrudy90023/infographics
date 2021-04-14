import React from 'react';
import moment from 'moment';

// import {Chart} from 'react-d3-core'
// import {BarChart} from 'react-d3-basic'

import {Motion, spring} from 'react-motion';
import {StyleRoot} from 'radium';

class TimeSpentOnMedia extends React.Component {

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
				textAlign:	'left',
				height: 	'auto',
				padding: 	'0 0 80px 0',
				listStyleType: 'none',
				marginLeft: 'auto',
				marginRight: 'auto',
				display: 'block',
				fontSize: '16px',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
				marginBottom: '100px',
				marginTop: '80px',
				width: '100%',

					'@media (min-width: 768px)': {
						width: '80%'
					}
			},

			pinkbar: {
				backgroundColor: '#fc4bd1',
				textAlign: 'center',
				height: '60px',

					'@media (min-width: 768px)': {
						height: '5px',

					},
					'@media (min-width: 1440px)': {

					}
			},

			pbp: {
				color: '#ffffff',
				textTransform: 'uppercase',
				fontSize: '18px',
				position: 'relative',
				top: '20px',
				letteSpacing: '2px',

					'@media (min-width: 768px)': {
						color: '#000000',
						textTransform: 'capitalize',
						fontSize: '20px',
						letterSpacing: '0px',
						top: '25px'
					},


					'@media (min-width: 1440px)' : {
						fontSize: '26px'

					}
			},

			barholder: {
				width: '100%',
				marginLeft: 'auto',
				marginRight: 'auto',

					'@media (min-width: 1440px)' : {
						width: '78%'

					}

			}

		}


		var mostTimeSpent = null;

		var data = Object.keys(this.state.data).map(function(type){
			return {type: type, timeSpent: this.state.data[type] }
		}.bind(this)).sort(function(a, b){
			return b.timeSpent - a.timeSpent;
		}).map(function(row, index, rows){
			if(index === 0) mostTimeSpent = row.timeSpent;

			var hours = Math.floor(row.timeSpent / 60) === 0 ? <span/> : <span className="tpmf">{Math.floor(row.timeSpent / 60)} HRS</span>;
			var minutes = <span className="tpmf">{row.timeSpent - (Math.floor(row.timeSpent / 60)*60)} MIN</span>

			var barWidth = index === 0 ? 100 : Math.floor((row.timeSpent/rows[0].timeSpent)*100) ;
			
			return <div style={{'marginTop':'20px', 'width': '100%', 'position': 'relative', 'height': '70px', 'overflow': 'hidden'}} key={index}>
						<label style={{'display': 'inline-block', 'position': 'relative', 'fontSize': window.screen.width === 1440 ? '16px' : '11px', 'fontWeight': '600!important', 'marginLeft': '15px', 'top': '10px'}}>{row.type.toUpperCase().replace('_', ' ')}</label>
						<p style={{'top':'-7px', 'display': 'inline-block', 'position': 'relative', 'fontSize': window.screen.width === 1440 ? '41px' : '35px', 'color': '#fc4bd1', 'float': 'right', 'marginRight': '16px', 'fontWeight':'200!important', 'marginBottom':'0', 'marginTop': '0'}}>{hours} {minutes}</p>
						<div style={{'display':'inline-block', 'width': '100%', 'position': 'relative', 'height': '15px', 'top': '-5px', 'padding': '0', 'margin': '0'}}>
							
						<Motion defaultStyle={{width: 0}} style={{width: spring(barWidth, {stiffness: 100, dampness: 100})}}>
						  
						  {val => {
						  	
						  	var barStyles = {
						  		width 		: val.width + "%",
								paddingLeft: '10px',
								boxSizing : 'border-box',
								borderRight : 'solid 15px #fff',
								borderLeft 	: 'solid 15px #fff',
								display 	: 'inline-block',
								backgroundColor : '#fc4bd1',
								position	: 	'relative',
								height 		: 	'10px'

						  	}

						  	return <div style={barStyles}>{val.x}</div>
						  }}


						</Motion>

						</div>
					</div>
				});	
    	

		return (
			<StyleRoot>
				<div style={[styles.mobile]}>
					<div style={[styles.pinkbar]} className="pinkbar"><p style={[styles.pbp]}>Time Spent On Media</p></div>
					<div style={[styles.barholder]}>
						{data}
					</div>
				</div>
			</StyleRoot>
		);
	}
}

export default TimeSpentOnMedia;

