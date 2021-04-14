import React from 'react';
import numeral from 'numeral';

// import {Chart} from 'react-d3-core'
// import {PieChart} from 'react-d3-basic'

import { Motion, spring } from 'react-motion';
import { Waypoint } from 'react-waypoint';
import { tyleRoot } from 'radium';

class EthnicGroups extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data,
			fired: false
		}
	}


	_handleWaypointEnter(){
		if (!this.state.fired){
			this.setState({fired:true})
		}
	}

	_handleWaypointLeave(){
		return;
		if (this.state.fired){
			this.setState({fired:false})
		}
	}



	render(){

		var styles = {
			mobile: {
				backgroundColor: '#ffffff',
				position:	'relative', 
				textAlign:	'center',
				height: 	'470px',
				padding: 	'0 0 30px 0',
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
			},

			bluebar: {
				backgroundColor: '#039fda',
				textAlign: 'center',
				height: '60px',


					'@media (min-width: 768px)': {
						height: '5px'
					},

					'@media (min-width: 1440px)': {
						height: '5px'
					}

			},

			bbp: {
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
						top: '30px'
					},


					'@media (min-width: 1440px)' : {
						fontSize: '26px'

					}


			},

			piecont: {
				width:  	'350px',
				textAlign: 	'center',
				position: 	'relative',
				height: 	'353px',
				display: 	'inline-block',
				verticalAlign: 	'middle',
				overflow: 	'hidden',
				top: 		'15px',

					'@media (min-width: 768px)': {
						width: '564px'
					},

					'@media (max-width: 320px)': {
						width: '300px',
						height: '300px'
					}
			},

			dataethnic: {
				position: 'relative',
				width: '100%',
				height: 'auto',
				top: 	'48%',
				'-ms-transform': 'translateY(-48%)',
				'-webkit-transform': 'translateY(-48%)',
				'-moz-transform': 'translateY(-48%)',
				'-o-transform': 'translateY(-48%)',
				'transform': 	'translateY(-48%)',

					'@media (min-width: 768px)': {
						left: '320px',
						width: '50%'
					},
			}

		}



		var datapoints = [],
			iterator = 0;

		var data = [];

		for(var race in this.state.data){
			data.push({race: race, percentage: this.state.data[race]});
		}

		var color = ['#039fdb','#35b2e2','#5cc1e8','#7ccdec', '#94d6f0', '#94d6f0', '#94d6f0', '#94d6f0'];

		var width = window.screen.width === 320 ? 300 : 350,
		    height = window.screen.width === 320 ? 300 : 350,
		    svgClassName = 'svgbluepie',
    		margins = {top: 0, right: 230, bottom: 0, left: 230},
		    innerRadius = 155,
		    value = function(d){
		    	return d.percentage;
		    },
		    name = function(d){
		    	return d.race;
		    },
		    chartSeries = data.map(function(d, index){
		    	return {
		    		field: d.race,
		    		name: '',
		    		color: color[index] || '#039fda'
		    	}
		    });

		var datapoints = [],
			iterator = 0;
			


		for(var point in this.state.data){

			var piefont = Object.keys(this.state.data).length <= 5 ? "31px" : "25px";
			var piebig = "41px";



			datapoints.push(<div style={{'width': '100%', 'position': 'relative', 'height': window.screen.width === 1440 ? "41px" : "31px"}} key={iterator}>
								<p style={{'color': color[iterator], 'display': 'inline-block', position: 'relative', fontSize: window.screen.width === 1440 ? piebig : piefont, 'margin': '0', fontWeight:'200!important', 'padding-right':'10px'}}>{this.state.data[point]}%</p>
								
								<label style={{'display': 'inline-block', 'position': 'relative', 'font-size': window.screen.width === 1440 ? "16px" : "11px", 'font-weight': '600!important', 'textTransform': 'uppercase'}}>{point}</label>
							</div>);
				
			iterator++
		}

		var showLegend = false;
		var dyninnerradius = window.screen.width === 320 ? 135 : 155;
		var dynradius = window.screen.width === 320 ? 160 : 180;

		return (
			<StyleRoot>
				<div style={[styles.mobile]}>
					<div style={[styles.bluebar]} className="blueheadtwo"><p style={[styles.bbp]}>Cultural Background</p></div>

					<Waypoint
				  	onEnter={this._handleWaypointEnter.bind(this)}
				  	threshold={0}/>
					{this.state.fired && <Motion defaultStyle={{innerRadius: 0, radius: 0, opacity: 0}} style={{opacity: spring(1, {stiffness: 60, dampness: 0}), innerRadius: spring(dyninnerradius, {stiffness: 100, dampness: 100}), radius: spring(dynradius,  {stiffness: 320, dampness: 600})}}>

									{val => {
										
										return <div><div style={[styles.piecont]}>



												      <div style={[styles.dataethnic]}>{datapoints}</div>
												</div></div>

									}}

									</Motion>}
				</div>
			</StyleRoot>
		);
	}
}


export default EthnicGroups;


