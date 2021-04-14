import React from 'react';
import { StyleRoot } from 'radium';




class List extends React.Component {

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
			headerbar: {
				textAlign: 'center',
				height: '60px',
				marginBottom: '0px',

					'@media (min-width: 768px)': {
						height: '5px',
						marginBottom: '70px'
					}
			},

			headercopy: {
				color: '#ffffff',
				textTransform: 'uppercase',
				fontSize: '18px',
				position: 'relative',
				top: '20px',
				letterSpacing: '2px',

					'@media (min-width: 768px)': {
						color: '#000000',
						textTransform: 'capitalize',
						letterSpacing: '0px',
						top: '40px',
						fontSize: '20px',
					},

					'@media (min-width: 1440px)' : {
						fontSize: '26px'

					}

			},

			listcont: {
				textAlign: 'left',
				fontSize: '18px',
				position: 'relative',
				padding: '30px 0 0 16px',
				top: '20px',
				fontWeight: '200',

					'@media (min-width: 768px)': {
						paddingLeft: '58px',

					}



			}

		}



		return (
			<StyleRoot>	
				
					<div style={[styles.headerbar]}><p style={[styles.headercopy]}>{this.state.title}</p></div>
					<ul style={[styles.listcont]} className="lister">
						{
							this.state.items.map(function(item, index){
								return <li key={index}>{item}</li>
							})
						}
					</ul>
				
			</StyleRoot>
		);
	}
}


export default List;
