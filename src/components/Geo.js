import React from 'react'
import Data from '../data.js'
import Nav from './Nav'

import Overview from './Overview'
import MediaBehaviors from './MediaBehaviors'
import TechTrends from './TechTrends'
import AppleInMarket from './AppleInMarket'

class Geo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			//data: props.match.params.geo,
			data: Data.filter(geo => {
				return props.match.params.geo.toLowerCase() === geo.geo.toLowerCase();
			})[0],
			section: 0
		}
	}

	update(section){
		this.setState({section: section});
	}

	render(){

		var sections = [
			<Overview key={0} data={this.state.data}/>,
			<MediaBehaviors key={1} data={this.state.data}/>,
			<TechTrends key={2} data={this.state.data} />,
			<AppleInMarket key={3} data={this.state.data} />
		];


		return(
			<div>
				<Nav data={this.state.data} update={this.update.bind(this)}/>
				{sections[this.state.section]}
			</div>
		)
	}

}


export default Geo;