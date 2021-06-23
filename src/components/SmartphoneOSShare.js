import React from 'react'
import numeral from 'numeral'

import {StyleRoot} from 'radium'

var osPaths = {
	android: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/android.svg',
	blackberry: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/blackberry.svg',
	ios: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/apple.svg',
	windows: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/windows.svg',
	other: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/osother.svg',
};



class SmartphonOSShare extends React.Component {

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
				marginBottom: '180px',
				top: '50px',
				width: '100%',

					'@media (min-width: 768px)': {
						top: '0px',
						marginBottom: '40px'
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
						fontSize: '16px',
						textTransform: 'capitalize',
						letterSpacing: '0px',
						top: '30px'
					},

					'@media (min-width: 1440px)' : {
						fontSize: '26px'

					}



			},


			col: {
				width: '50%',
				padding: '0',
				display: 'inline-block',
				textAlign: 'center',
				height: '60px',
				margin: '40px 0 60px 0',

					'@media (min-width: 768px)': {
						width: '70%'
					}
			}
		}


		var dataset = [],
			iterator = 0;

		for(var platform in this.state.data){

			var oso = osPaths[platform]

			dataset.push(
				<div style={[styles.col]} key={iterator}>
					<img src={oso} style={{'width': '60px', 'height': '60px', 'display': 'inherit', 'borderRadius': '50px', 'marginBottom': '10px'}} alt="" />
					<label style={{'display': 'block', 'position': 'relative', 'fontSize': window.screen.width === 1440 ? '16px' : '11px', 'fontWeight': '600!important', 'textTransform': 'uppercase'}}>{platform} </label>
					<span style={{'textTransform': 'uppercase', 'color': '#f08817', 'fontSize': window.screen.width === 1440 ? '41px' : '31px', 'position': 'relative', 'top': '10px', 'fontWeight':'200!important'}}>{numeral(this.state.data[platform]/100).format('0.0%')}</span>
				</div>
			)
			iterator++
		}

		return (
			<StyleRoot>
				<div style={[styles.mobile]} >
					<div style={[styles.orangebar]}><p style={[styles.obp]}>Smartphone OS Sales Share</p></div>
					{dataset}
					<div style={{width: '100%', 'position': 'relative', 'display': 'block', 'fontSize': '16px', 'textAlign': 'center', 'height':'30px', 'top': '10px'}}><p style={{'display': 'block', 'position': 'relative', 'fontSize': '15px', 'color': '#ccc', 'margin':'0 30px 0 0', 'padding':'0', 'float':'right', 'top':'30px'}}>FY 2015</p></div>
				</div>
			</StyleRoot>	
		);
	}
}

export default SmartphonOSShare;


