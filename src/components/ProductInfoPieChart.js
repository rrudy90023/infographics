import React from 'react';
import numeral from 'numeral';
import MetaPrice from './MetaPrice';
import Trends from './Trends';
import {StyleRoot} from 'radium';

// import {Chart} from 'react-d3-core'
// import {PieChart} from 'react-d3-basic'

import {Motion, spring} from 'react-motion';
import {Waypoint} from 'react-waypoint';


class ProductInfoPieChart extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data.data,
			legend: props.data.legend,
			trend: props.data.trends
		}
	}


	_handleWaypointEnter(){
		if (!this.state.fired){
			this.setState({fired:true})
		}
	}

	_handleWaypointLeave(){
		return;
		if (this.state.fired){
			this.setState({fired:false})
		}
	}


	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({
			data: nextProps.data ? nextProps.data.data : null,
			legend: nextProps.data ? nextProps.data.legend : null,
			trend: nextProps.data ? nextProps.data.trends : null			
		});
		
	}

	render(){
		
		var datapoints = [],
			legend = [],
			trendy = [],
			iterator = 0;

			var data = [];

			for(var os in this.state.data){
				data.push({os: os, percentage: this.state.data[os]});
			}

			var color = ['#4cb02d','#7fc668','#99d287','#abda9d','#c3e5b9','#c3e5b9','#c3e5b9','#c3e5b9']

		
		var width = window.screen.width === 320 ? 300 : window.screen.width >= 768 ? 270 : 350,
		    height = window.screen.width === 320 ? 300 : window.screen.width >= 768 ? 270 : 350,
		    svgClassName = 'svggreenpie',
    		margins = {top: 10, right: 230, bottom: 10, left: 230},
		    innerRadius = 155,
		    value = function(d){
		    	return d.percentage;
		    },
		    name = function(d){
		    	return d.os;
		    },
		    chartSeries = data.map(function(d, index){
		    	return {
		    		field: d.os,
		    		name: '',
		    		color: color[index] || '#4cb02d'
		    	}
		    }) ;

		    var showLegend = false;




		for(var point in this.state.data){

			datapoints.push(

				<div style={{'width': '100%', 'position': 'relative', 'height': window.screen.width === 1440 ? '41px' : '31px'}} key={iterator}>

					<p style={{'display': 'inline-block', 'position': 'relative', 'fontSize': window.screen.width === 1440 ? '41px' : '31px', 'color': color[iterator], 'paddingRight': '10px', 'fontWeight':'200!important', margin: '0'}}>{this.state.data[point]}%</p>

					<label style={{'display': 'inline-block', 'position': 'relative', 'fontSize': window.screen.width === 1440 ? '16px' : '11px', 'fontWeight': '600!important', 'textTransform': 'uppercase'}}>{point}</label>

				</div>);

			iterator++

		};


		legend.push(<div className="legendcont"><p className="legfont">{this.state.legend}</p></div>);
		
		var dyninnerradius = window.screen.width === 320 ? 135 : window.screen.width >= 768 ? 105 : 155;
		var dynradius = window.screen.width === 320 ? 160 : window.screen.width >= 768 ? 130 : 180;

		var dummypie = window.screen.width === 320 || window.screen.width >= 768 ? "230px" : "310px";
		var nodatacopy = window.screen.width === 320 || window.screen.width >= 768 ? "75px" : "110px";



		var styles = {


			piecont: {
				width: '350px',
				textAlign: 'center',
				position: 'relative',
				height: '353px',
				display: 'inline-block',
				verticalAlign: 'middle',
				overflow: 'hidden',
				top: '24px',

					'@media (max-width: 320px)': {
						width: '300px',
						height: '300px'
					},

					'@media (min-width: 768px)': {
						top: '54px',
						width: '520px',
						height: '300px',
						textAlign: 'left'
					},

					'@media (min-width: 1440px)': {

						width: '650px',

					}



			},



			parentdiv: {
				width: '100%',
				position: 'relative',
				display: 'block',
				fontSize: '16px',
				textAlign: 'center',
				height: 'auto',
				

					'@media (min-width: 768px)': {
							
					}

			},

			pieshell: {
				left: '0',
				

					'@media (min-width: 768px)': {
						position: 'relative',
						left: '5%',
						top: '20px'
					}
			},

			pieinnercont: {
				height: dummypie,
				width: dummypie

			}

		}




		return (
			<StyleRoot>
				<div style={[styles.parentdiv]}>

					<Waypoint
				  	onEnter={this._handleWaypointEnter.bind(this)}
				  	threshold={0}/>
					    
					    {this.state.fired && <Motion defaultStyle={{innerRadius: 0, radius: 0, opacity: 0}} style={{opacity: spring(1, {stiffness: 60, dampness: 0}), innerRadius: spring(dyninnerradius, {stiffness: 100, dampness: 100}), radius: spring(dynradius,  {stiffness: 320, dampness: 600})}}>

						    {val => {

						    	return <div>{datapoints.length > 0 ? [<div style={[styles.piecont]}>
						    		<div style={[styles.pieshell]}></div>
						    			<div className="dataos">{datapoints}</div></div>, this.props.children, legend] : <div className="fpcont" style={[styles.fakepiecont]}><div className="picont" style={[styles.pieinnercont]}>
						    		<p style={{'color':'#56ca31', 'fontSize': '25px', 'position': 'relative', 'top': nodatacopy}}>No Data Available</p>
						    	</div></div> }</div>

							}}

						</Motion>}

				</div>
			</StyleRoot>
		);
	}
}

export default ProductInfoPieChart;
