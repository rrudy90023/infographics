import React from 'react'



class OrderedList extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			title: props.title,
			color: '#039fdb' || props.color,
			items: props.items
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({items: nextProps.items})
	}

	render(){
		return (

			<div className="potpie" style={{'width': '100%', 'position': 'relative', 'display': 'block', 'textAlign': 'center', 'top':'0'}}>
				<ul style={{'textAlign': 'left', 'fontSize': '18px', 'width': '90%', 'position': 'relative', 'paddingLeft':'16px', 'top':'0', 'paddingTop':'30px', 'fontWeight': '200!important'}}>
					{
						this.state.items.map(function(item, index){
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			</div>
		);
	}
}

export default OrderedList;