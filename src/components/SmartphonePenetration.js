import React from 'react';
import {StyleRoot} from 'radium';

// import Aboveaverage from 'http://rudes.de/infog/images/icons/above_average.svg'
// import Average from 'http://rudes.de/infog/images/icons/average.svg'
// import Belowaverage from 'http://rudes.de/infog/images/icons/below_average.svg'
// import Low from 'http://rudes.de/infog/images/icons/low.svg'


class SmartphonePenetration extends React.Component {

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
				top: '20px',
				width: '100%',

					'@media (min-width: 768px)': {
						top: '0px',
						paddingBottom: '20px',
						marginBottom: '20px'
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


		var text = [<div><div style={{'backgroundColor':'#f08817', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Above Average</p></div>
					<div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Average</p></div>
					<div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Below Average</p></div>
					<div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Low</p></div></div>,

					<div><div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Above Average</p></div>
					<div style={{'backgroundColor':'#f08817', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Average</p></div>
					<div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Below Average</p></div>
					<div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Low</p></div></div>,

					<div><div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Above Average</p></div>
					<div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Average</p></div>
					<div style={{'backgroundColor':'#f08817', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Below Average</p></div>
					<div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Low</p></div></div>,

					<div><div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Above Average</p></div>
					<div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Average</p></div>
					<div style={{'backgroundColor':'#ccc', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Below Average</p></div>
					<div style={{'backgroundColor':'#f08817', 'marginTop': '5px', 'width': '90%', 'height':'50px', 'display':'inline-block'}}><div></div><p>Low</p></div></div>]


		return (
			<StyleRoot>
				<div style={[styles.mobile]} >
					<div style={[styles.orangebar]}><p style={[styles.obp]}>Smartphone Penetration</p></div>
					
					<div className="avline" style={{'width': '100%', 'position': 'relative', 'display': 'block', 'textAlign': 'center','paddingTop':'30px'}}>
						
						{text[this.state.data]}

					</div>
				</div>
			</StyleRoot>
		);
	}
}

export default SmartphonePenetration;