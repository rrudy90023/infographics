import React from 'react';

import StateOfTheBrand from './StateOfTheBrand';
import ProductInfo from './ProductInfo';
import Milestones from './Milestones';

class AppleInMarket extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){
		return (
			<div style={{'backgroundColor':'#f7f7f7', 'fontSize': '16', 'padding': '0', 'margin':'0', 'position': 'relative', 'top':'-22px'}}>
				<StateOfTheBrand data={this.state.data.state_of_brand} /><ProductInfo data={this.state.data.device_breakdown} /><Milestones data={this.state.data.milestones} geo={this.state.data.geo} />
			</div>
		);
	}
}

export default AppleInMarket;