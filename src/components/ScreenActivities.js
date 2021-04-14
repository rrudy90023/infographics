import React from 'react';
import {StyleRoot} from 'radium';


var platPaths = {
	mobile: 'http://rudes.de/infog/images/icons/mobile.svg',
	tablet: 'http://rudes.de/infog/images/icons/tablet.svg',
	desktop: 'http://rudes.de/infog/images/icons/desktop.svg',
	laptop: 'http://rudes.de/infog/images/icons/laptop.svg'
};


class ScreenActivities extends React.Component {

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
						width: '80%',
						textAlign:	'center'
					}
			},

			pinkbar: {
				backgroundColor: '#fc4bd1',
				textAlign: 'center',
				height: '60px',

					'@media (min-width: 768px)': {
						height: '5px'
					}
			},

			pbp: {
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


			},

			mediacont: {
				width: '100%',
				position: 'relative',
				display: '-webkit-box',
				height: '170px',

					'@media (min-width: 768px)': {
						width: '30%',
						position: 'relative',
						display: 'inline-block',
						height: '240px'
					}

			},

			iconcont: {
				position: 'relative',
				textTransform: 'uppercase',
				color: '#fc4bd1',
				width: '50%',

				'@media (min-width: 768px)': {
					width: '170px',
					display: 'block',
					height: '130px',
					marginRight: 'auto',
					marginLeft: 'auto'
				},

				'@media (min-width: 1440px)': {
					width: '200px',

				}



			},

			listcont: {
				position: 'relative',
				width: '50%',

				'@media (min-width: 768px)': {
					width: '200px',
					display: 'block',
					textAlign: 'left',
					marginRight: 'auto',
					marginLeft: 'auto'
				}

			},

			olcont: {
				color: '#fc4bd1',
				fontSize: '20px',
				width: '98%',
				margin: 'auto',
				position: 'absolute',
				top: '0',
				left: '0',
				bottom: '0',
				right: '0',
				height: '77%',
				paddingLeft: '0',

					'@media (min-width: 768px)': {
						left: '30px'
					}
			}
		}

		var dataset = [],
			iterator= 0;

		
		for(var platform in this.state.data){
			
			var device = platPaths[platform]

			dataset.push(<div style={[styles.mediacont]} key={iterator}>
				
				<div style={[styles.iconcont]}>

					<div style={{'margin':'auto', 'position': 'absolute', 'top':'0', 'left': '0', 'bottom': '0', 'right': '0', 'width': '50%', 'height':'60%', 'textAlign':'center'}}><img src={device} style={{'width':'100%', 'height':'80px', 'position': 'relative'}} alt="" /><p style={{'padding':'0', 'margin': '0', 'fontsize': window.screen.width === 1440 ? '20px' : '16px'}}>{platform}</p></div>

				</div>


				<div style={styles.listcont}>	

					<ol className="numcol" style={[styles.olcont]}>
						{
							this.state.data[platform].map(function(activity, index){
								return <li style={{'position': 'relative', 'fontWeight': '600!important', 'lineHeight': '5px'}} key={index} ><p style={{'marginBottom': '8px', 'color': 'black', 'fontSize': window.screen.width === 1440 ? '16px' : '13px', 'display':'inline-block'}} key={index}>{activity}</p></li>
							})
						}
					</ol>

				</div>

			</div>)

			iterator++
		}

		return (
			<StyleRoot>
				<div style={[styles.mobile]}>
					<div style={[styles.pinkbar]} className="pinkbartwo"><p style={[styles.pbp]}>Screen Activities</p></div>
					{dataset}
				</div>
			</StyleRoot>
		);
	}
}


export default ScreenActivities;

