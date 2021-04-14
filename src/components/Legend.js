import React from 'react'
import numeral from 'numeral'

class Legend extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			legend: props.legend
		}
	}


	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({legend: nextProps.legend})
	}

	render(){
		

		return (
			<div style={{width: '100%', 'position': 'relative', 'display': 'block', 'fontSize': '16px', 'textAlign': 'center'}}>
				<p style={{'display': 'inline-block', 'position': 'relative', 'fontSize': '25px', 'color': '#56ca31', 'marginRight': '15px'}}>{this.state.legend}%</p>
			</div>

		);
	}
}

export default Legend;