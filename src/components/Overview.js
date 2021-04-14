import React from 'react';

import BasicCountryFacts from './BasicCountryFacts';
// import EthnicGroups from './EthnicGroups'
import CulturalTruths from './CulturalTruths';
import MarketingOpportunities from './MarketingOpportunities';


class Overview extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){

		return (
			<div style={{'fontSize': '0', 'padding': '0', 'margin':'0', 'position': 'relative', 'top':'-4px', 'backgroundColor':'#f7f7f7', 'textAlign':'center'}}>
 				<MarketingOpportunities data={this.state.data.marketing_opportunities} />
				<BasicCountryFacts data={this.state.data.basic_country_facts} geo={this.state.data.geo} />
				
				<CulturalTruths data={this.state.data.cultural_truths} />
			</div>
		);
	}
}


export default Overview