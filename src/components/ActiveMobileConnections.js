import React from 'react';
//import Ant from 'http://rudes.de/infog/images/icons/carrier.svg';


import {StyleRoot} from 'radium';

class ActiveMobileConnections extends React.Component {

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
				display: 'block',
				fontSize: '16px',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 -4px 7px rgba(0, 0, 0, 0.2)',
				marginBottom: '100px',
				top: '50px',
				width: '100%',

					'@media (min-width: 768px)': {
						top: '0px',
						paddingBottom: '60px',
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



		var checker = this.state.data === "No data available" ? <div style={{'width':'100%', 'textAlign':'center'}}><span style={{'position': 'relative', 'display': 'inline-block', 'height': '100px', 'color': '#f08817', 'fontSize': '24px', 'fontWeight': '200!important', 'top':'60px'}}>No data available</span></div> : <div><img src="http://rudes.de/infog/images/icons/carrier.svg" style={{'width': '100px', 'position': 'relative', 'display': 'inline-block', 'height': '150px', 'top': '46px'}} alt="" /><div style={{'width': '40%', 'position': 'relative', 'display': 'inline-block', 'height': '100px', 'color': '#f08817', 'fontSize': '75px', 'fontWeight': '100!important'}}><span style={{'fontSize':'11px', 'color':'#000', 'position':'relative', 'fontWeight':'600!important', 'display':'block', 'top':'3px', 'letterSpacing':'2px', 'width':'100%'}}>3G/4G</span><div style={{'width':'100%', 'margin':'0', 'padding':'0', 'position':'relative', 'display':'inline-block', 'top':'0px'}}>{this.state.data}%</div></div></div>;


		return (
			<StyleRoot>
				<div style={[styles.mobile]}>
					<div style={[styles.orangebar]}><p style={[styles.obp]}>Active Mobile Connections</p></div>
					<div style={{'width': '100%', 'position': 'relative', 'display': 'block', 'textAlign': 'center', 'height': 'auto'}}>
						{checker}
					</div>
				</div>
			</StyleRoot>
		);
	}
}


export default ActiveMobileConnections;