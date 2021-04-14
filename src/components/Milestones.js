import React from 'react'
import numeral from 'numeral'
import {StyleRoot} from 'radium'

import Data from '../data.js'




var myexcept = {

	my : {

	font: "20px",
	width: "70px",
	height: "auto",
	pdiv: "90px",
	divspan: "2px",
	topSpan: "-42px"
	}
	
}




class Milestones extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data,
			geo: props.geo
		}
	}


	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({
			geo: nextProps.geo			
		});
		
	}




	render(){


		var datapoints = [],
			iterator = 0;


		var myfont = this.state.geo === "my" ? myexcept[this.state.geo].font : "31px";
		var myheight = this.state.geo === "my" ? myexcept[this.state.geo].height : "34px";
		var mywidth = this.state.geo === "my" ? myexcept[this.state.geo].width : "70px";
		var mybigdiv = this.state.geo === "my" ? myexcept[this.state.geo].pdiv : "70px";
		var spanbott = this.state.geo === "my" ? myexcept[this.state.geo].divspan : "0px";
		var topper = this.state.geo === "my" ? myexcept[this.state.geo].topSpan : "-32px";


		var styles = {
			mobile: {
				backgroundColor: '#ffffff',
				position:	'relative', 
				textAlign:	'center',
				height: 	'auto',
				padding: 	'0 0 80px 0',
				listStyleType: 'none',
				margin: '0 auto 100px auto',
				display: 'block',
				fontSize: '16px',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 -4px 7px rgba(0, 0, 0, 0.2)',
				top: '0',
				width: '100%',

					'@media (min-width: 768px)': {
						width: '80%'
					}
			},
			greenbar: {
				backgroundColor: '#4cb02d',
				textAlign: 'center',
				height: '60px',
				marginBottom: '70px',

					'@media (min-width: 768px)': {
						height: '5px',
						marginBottom: '90px'
					}
			},
			gbp: {
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
						top: '30px',
						letterSpacing: '0px',
					},

					'@media (min-width: 1440px)' : {
						fontSize: '26px'
					}


			},


			parentdiv: {
				width: '100%',

					'@media (min-width: 768px)': {
						width: '100%',
						position: 'relative',
						textAlign: 'left',
						height: 'auto',
						marginLeft: '2%'
					},

					'@media (min-width: 1440px)' : {
						marginLeft: '3%'
					}

			},

			childdiv: {
				height: mybigdiv,
				paddingTop: '10px',
				

					'@media (min-width: 768px)': {
						color: '#000000',
						display: 'inline-block',
						position: 'relative',
						height: 'auto',
						right: '0',
						top: '0',
						width: '46%',
						marginBottom: '30px'
					}
			},

			copyline: {
				height: '33px',
				width: '100%',
				display: 'inline-block',
				position: 'relative',

					'@media (min-width: 768px)': {
						top: '10px',
						height: 'auto'
					}
			},

			barline: {
				height: '20px',
				width: '100%',
				display: 'inline-block',
				position: 'relative',
				top: '-30px',

					'@media (min-width: 768px)': {
						top: '10px'
					}
			},

			spancopy: {
				textAlign: 'right',
				display: 'inline-block',
				position: 'absolute',
				fontWeight: '400',
				'float':'right',
				right: '20px',
				bottom: spanbott,

					'@media (min-width: 768px)': {
						width: '60%'
					}

			}


		}



		return (
			<StyleRoot>
			<div style={[styles.mobile]}>
				<div style={[styles.greenbar]}><p style={[styles.gbp]}>Milestones</p></div>
				<div style={[styles.parentdiv]}>
					{this.state.data.map(function(data, index) {
						return (<div style={[styles.childdiv]} key={index}>
									<div style={[styles.copyline]}>
										<div style={{'display':'block', 'position':'relative', 'width':'100%', 'verticalAlign':'bottom', 'height':'auto'}}><p className="mileyear" style={{'textAlign':'left', 'margin':'0', 'float':'left', 'left':'25px', 'width': mywidth, 'display': 'inline-block', 'position': 'absolute', 'fontSize': myfont, 'color': '#4cb02d', 'fontWeight':'200!important', 'height': myheight, 'top': topper}}>{data.year}</p><span className="spanmiles" style={[styles.spancopy]}>{data.name}</span></div>	
									</div>
									<div style={[styles.barline]}>
										<div style={{'top':'5px', 'height': '8px', 'width':'70px', 'position':'absolute', 'left':'25px', 'backgroundColor': '#4cb02d', 'float': 'left'}}></div>
										<div style={{'textAlign':'center', 'width':'100%', 'height':'3px', 'display': 'inline-block', 'backgroundColor':'#4cb02d', 'borderLeft':'solid 25px #fff', 'borderRight':'solid 21px #fff', 'boxSizing':'border-box', 'position':'relative'}}></div>
									</div>
								</div>)
					})}
				</div>
			</div>
			</StyleRoot>
		);
	}
}


export default Milestones;

