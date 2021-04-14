import React from 'react'

import SmartphonePenetration from './SmartphonePenetration'
import SmartphoneOSShare from './SmartphoneOSShare'
import ActiveMobileConnections from './ActiveMobileConnections'
import CarrierRelationship from './CarrierRelationship'
import LocalTrends from './LocalTrends'

import {StyleRoot} from 'radium'

class TechTrends extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){


		var styles = {

			mobile: {
				backgroundColor: '#f7f7f7',
				position: 'relative',
				fontSize: '16px',
				padding: '0',
				margin: '0',
				top: '20px',
				display: 'inline-block', 
				width: '100%',
				textAlign: 'center',
				height: 'auto',

					'@media (min-width: 768px)': {
						width: '100%',
						marginBottom: '80px'
					}
			},

			leftcol: {
				display: 'inline-block',
				position:	'relative', 
				width: '100%',

					'@media (min-width: 768px)': {
						width: '40%',
						verticalAlign: 'top',
						marginLeft: '10%',
						'float': 'left'
					}
			},

			rtcol: {
				display: 'inline-block',
				position:	'relative', 
				width: '100%',

					'@media (min-width: 768px)': {
						width: '35%',
						verticalAlign: 'top',
						marginRight: '5%'
					}
				
			}
		}

		return (
			<StyleRoot>
				<div style={[styles.mobile]}>
					<div style={[styles.leftcol]}>
						<SmartphonePenetration data={this.state.data.smartphone_penetration} />
						<ActiveMobileConnections data={this.state.data.active_mobile_connection} />
						<CarrierRelationship data={this.state.data.carrier_relationship} />
					</div>

					<div style={[styles.rtcol]}><SmartphoneOSShare data={this.state.data.os_share} /></div>

				</div>
				<LocalTrends data={this.state.data.top_local_trends} />
			</StyleRoot>
		);
	}
}


export default TechTrends;