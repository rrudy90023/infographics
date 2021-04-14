import React from 'react';
import numeral from 'numeral';


import { Motion, spring } from 'react-motion';
import { Waypoint } from 'react-waypoint';

import { StyleRoot } from 'radium'

class CarrierRelationship extends React.Component {

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
				height: 	'300px',
				padding: 	'0 0 80px 0',
				listStyleType: 'none',
				display: 'block',
				fontSize: '16px',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 -4px 7px rgba(0, 0, 0, 0.2)',
				marginBottom: '100px',
				top: '50px',
				width: '100%',

					'@media (min-width: 768px)': {
						top: '0px',
						paddingBottom: '20px',
						marginBottom: '20px',
					}
			},

			orangebar: {
				backgroundColor: '#f08817',
				textAlign: 'center',
				height: '60px',
				marginBottom: '20px',

					'@media (min-width: 768px)': {
						height: '5px',
						marginBottom: '50px'
					}
			},

			obp: {
				color: '#ffffff',
				textTransform: 'uppercase',
				fontSize: '18px',
				position: 'relative',
				top: '20px',
				letterSpacing: '2px',

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

					
			}


		}



	var blocker = this.state.data.postpaid === "Unavailable" ? "none" : "inline-block";
	var subber = this.state.data.postpaid === "Unavailable" ? "block" : "none";

		return (

			<StyleRoot>

				<div style={[styles.mobile]}>
					<div style={[styles.orangebar]}><p style={[styles.obp]}>Carrier Relationship</p></div>

					<Waypoint
				  	onEnter={this._handleWaypointEnter.bind(this)}
				  	threshold={0}/>	

				  	<div style={{'display': subber}}><div style={{'width':'100%', 'textAlign':'center'}}><span style={{'position': 'relative', 'display': 'inline-block', 'height': '100px', 'color': '#f08817', 'fontSize': '24px', 'fontWeight': '200!important', 'top':'60px'}}>No data available</span></div></div>

					{this.state.fired && <div style={{'width': '100%', 'position': 'relative', 'display': blocker, 'textAlign': 'center'}}>

							<div style={{'verticalAlign':'middle', 'width': 'auto', 'position': 'relative', 'display': 'inline-block', 'textAlign': 'center', 'height': 'auto', 'marginTop': '40px', 'left':'11px'}}>
						
							<Motion defaultStyle={{width: 0, height: 0, borderRadius: 0 }} style={{width: spring(this.state.data.postpaid, {stiffness: 100, dampness: 100}), height: spring(this.state.data.postpaid, {stiffness: 100, dampness: 100}), borderRadius: spring(this.state.data.postpaid, {stiffness: 100, dampness: 100})}}>

								{val => {
										
										var orangePost = {
											width : val.width + 100 + "px",
											boxSizing : 'border-box',
											display 	: 'inline-block',
											backgroundColor : '#f08817',
											position	: 	'relative',
											height 		: 	val.height + 100 + "px",
											borderRadius: 	val.borderRadius + 100 + "px",
											opacity 	: 	0.5
										}


								return <div><div style={orangePost}></div></div>

								}}

							</Motion>

								<label style={{'paddingBottom':'30px', 'color': '#f08817', 'fontSize': '16px', 'position': 'absolute',  'margin':'auto', 'top': '0', 'left':'0', 'bottom':'0', 'right':'0', 'height':'38px', 'width':'100px'}}>contract base</label>
								<div style={{'paddingTop':'23px', 'color': '#f08817', 'fontSize': '31px', 'fontWeight':'200!important', 'position': 'absolute',  'margin':'auto', 'top': '0', 'left':'0', 'bottom':'0', 'right':'0', 'height':'30px', 'width':'60px'}}>{numeral(this.state.data.postpaid/100).format('0%')}</div>
								
							</div>

							<div style={{'verticalAlign':'middle','width': 'auto', 'position': 'relative', 'display': 'inline-block', 'textAlign': 'center', 'height': 'auto', 'marginTop': '40px', 'right':'11px'}}>
								
							<Motion defaultStyle={{width: 0, height: 0, borderRadius: 0 }} style={{width: spring(this.state.data.prepaid, {stiffness: 100, dampness: 100}), height: spring(this.state.data.prepaid, {stiffness: 100, dampness: 100}), borderRadius: spring(this.state.data.prepaid, {stiffness: 100, dampness: 100}) }}>	

								{val => {
									
									var orangePre = {
										width : val.width + 100 + "px",
										boxSizing : 'border-box',
										display 	: 'inline-block',
										backgroundColor : '#f08817',
										position	: 	'relative',
										height 		: 	val.height + 100 + "px",
										borderRadius: 	val.borderRadius + 100 + "px",
										opacity 	: 	0.9
									};

								return <div><div style={orangePre}></div></div>

								}}

							</Motion>

								<label style={{'paddingBottom':'30px', 'color': '#fff', 'fontSize': '16px', 'position': 'absolute',  'margin':'auto', 'top': '0', 'left':'0', 'bottom':'0', 'right':'0', 'height':'20px', 'width':'60px'}}>prepaid</label>
								<div style={{'paddingTop':'5px', 'color': '#fff', 'fontSize': '31px','fontWeight':'200!important', 'position': 'absolute',  'margin':'auto', 'top': '0', 'left':'0', 'bottom':'0', 'right':'0', 'height':'30px', 'width':'70px'}}>{numeral(this.state.data.prepaid/100).format('0%')}</div>
								
							</div>

					</div>}

				</div>

			</StyleRoot>
		);
	}
}

export default CarrierRelationship;