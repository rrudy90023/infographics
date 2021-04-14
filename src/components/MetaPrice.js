import React from 'react'
import {StyleRoot} from 'radium'


class MetaPrice extends React.Component {

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



		var styles = {


			mobile: {
				padding: '20px 0 20px 0',
				width: '100%',
				position: 'relative',
				height: 'auto',
				display: 'block',
				textAlign: 'center',

					'@media (min-width: 768px)': {
						paddingTop: '30px 0 0 0',
						width: '82%'
					}

			}

		}


		return (
			<StyleRoot>
				<div className="metap" style={[styles.mobile]}>
					<ul style={{'textAlign': 'left', 'fontSize': '15px', 'width': '90%', 'position': 'relative', 'paddingLeft':'16px', 'top':'0', 'paddingTop':'10px', 'fontWeight': '200!important'}}>
						{
							this.state.items.map(function(item, index){
								return <li key={index}>{item}</li>
							})
						}
					</ul>
				</div>
			</StyleRoot>
		);
	}
}


export default MetaPrice;