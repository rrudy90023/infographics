import React from 'react';
import { StyleRoot } from 'radium';



class MarketingOpportunities extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){

		var styles = {
			mobile: {
				backgroundColor: '#039fda',
				width: '100%',
				position: 'relative',
				display: 'inline-block',
				textAlign: 'center',
				height: 'auto',
				fontSize: '0',
				paddingBottom: '100px',
				boxShadow:  '0 4px 7px rgba(0, 0, 0, 0.2)',
				marginTop: '0',
				marginBottom: '0',

					'@media (min-width: 768px)': {
						width: '80%',
						marginTop: '50px',
						marginBottom: '30px',
					}
			},

			pmo: {
				color: '#ffffff',
				textTransform: 'uppercase',
				fontSize: '18px',
				position: 'relative',
				top: '20px',
				letteSpacing: '2px',

					'@media (min-width: 768px)': {
						
						textTransform: 'capitalize',
						fontSize: '20px',
						letterSpacing: '0px',

					},

					'@media (min-width: 1440px)' : {
						fontSize: '26px'

					}
			}


		}

		return (
			<StyleRoot>	
				<div style={[styles.mobile]}>
					<div style={{'backgroundColor': '#039fda', 'textAlign': 'center', 'height': '60px', 'top':'40px', 'position': 'relative'}}><p style={[styles.pmo]}>Marketing Opportunities</p></div>
					<div style={{'width': '100%', 'position': 'relative', 'display': 'block', 'textalign': 'center', 'height': 'auto', 'top':'50px'}}>
						<div style={{'backgroundColor': '#039fda','width': '80%', 'position': 'relative', 'display': 'inline-block', 'height': 'auto', 'color': '#fff', 'fontSize': '18px', 'marginBottom': '30px'}}>{this.state.data}</div>
					</div>
				</div>
			</StyleRoot>
		);




	}
}


export default MarketingOpportunities
