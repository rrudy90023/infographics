import React from 'react';
import OrderedList from './OrderedList';
import Trends from './Trends';
import MetaPrice from './MetaPrice';
import {StyleRoot} from 'radium';

import ProductInfoPieChart from './ProductInfoPieChart';
import Legend from './Legend';

var ware = {
	iphone: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/iphone.svg',
	ipad: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/ipad.svg',
	macbook: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/macbook.svg',
	watch: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/watch.svg',
	music: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/music.svg'

};


var greyware = {
	iphone: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/iphoneg.svg',
	ipad: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/ipadg.svg',
	macbook: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/macbookg.svg',
	watch: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/watchg.svg',
	music: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/musicg.svg'

};


class ProductInfo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data,
			activeTab: 0,
			trend: props.data.pie_chart
		}

	}


	toggleTab(index){
		this.setState({activeTab: index});

	}


	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({
			trend: nextProps.data ? nextProps.data.pie_chart : null			
		});
		
	}

	render(){

		var styles = {
			mobile: {
				backgroundColor: '#ffffff',
				position:	'relative', 
				textAlign:	'left',
				height: 	'auto',
				padding: 	'0',
				listStyleType: 'none',
				margin: '80px auto 120px auto',
				display: 'block',
				fontSize: '16px',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 -4px 7px rgba(0, 0, 0, 0.2)',
				width: '100%',

					'@media (min-width: 768px)': {
						width: '80%'
					}
			},

			greenbar: {
				backgroundColor: '#4cb02d',
				textAlign: 'center',
				height: '60px',
				marginBottom: '0px',

					'@media (min-width: 768px)': {
						height: '5px',
						marginBottom: '0px'
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
						letterSpacing: '0px',
						fontSize: '20px',
						top: '35px'
					},

					'@media (min-width: 1440px)' : {
						fontSize: '26px'

					}




			},

			produl: {
				height: 'auto',
				width: '100%',
				position: 'relative',
				textAlign: 'center',
				padding: '0',
				margin: '0',
				backgroundColor: '#ccc',

					'@media (min-width: 768px)': {
						backgroundColor: '#fff'
					}
			},

			prodli: {
				cursor: 'pointer',
				width: '25%',
				position: 'relative',
				display: 'inline-block',
				height: '107px',
				margin: '0',
	

					'@media (min-width: 768px)': {
						display: 'block',
						width: '100%',
						height: '107px'
					}
			},

			fakeli: {
				backgroundColor: 'white',
				width: '25%',
				position: 'relative',
				display: 'inline-block',
				height: '107px',
				margin: '0',

					'@media (min-width: 768px)': {
						display: 'block',
						width: '100%',
						height: '107px'
					}
			},

			protab: {
				width: '100%',
				display: 'block',

					'@media (min-width: 768px)': {
						width: '15%',
						display: 'inline-block',
						verticalAlign: 'top'
					}

			},

			piediv: {
				width: '100%',
				display: 'block',

					'@media (min-width: 768px)': {
						width: '85%',
						display: 'inline-block'
					}

			},

			tabimg: {
				width: '100%',
				height: '60px',
				display: 'inline-block',
				margin: '0',
				padding: '0',
				position: 'relative',
				top: '10px',

					'@media (min-width: 768px)': {
						height: '60px'
					}
			}

		}


		var self = this;

			return (
				<StyleRoot>
						<div className="proinfo" style={[styles.mobile]}>

							<div style={[styles.greenbar]}><p style={[styles.gbp]}>Product Info</p></div>
							
							<div style={[styles.protab]}>

							<ul style={[styles.produl]}>

								{this.state.data.map(function(data, index) {

									var hard = ware[data.device.toLowerCase()]
									var hardgrey = greyware[data.device.toLowerCase()]

									return (

										<li style={[styles.prodli]} className={self.state.activeTab === index ? 'whitetab' : 'greytab'} onClick={self.toggleTab.bind(self, index)} key={index} >
											<a>
												<img key={index} src={self.state.activeTab === index ? hard : hardgrey} style={[styles.tabimg]} alt="" />

												<span style={{'textTransform': 'uppercase', 'fontSize': '15px', 'top': '8px', 'display': 'inline-block', 'position': 'relative', 'width': '100%'}}>{data.device}</span>
											</a>

										</li>)

									
								})}
								
								{self.state.data.length === 3 && <li style={[styles.prodli]} className={window.screen.width >= 768 ? "fakewhitetab" : "killer"} ></li>}

							</ul>

							</div>
							{this.state.data.filter(function(item, index){
								return index === self.state.activeTab;
							}).map(function(data, index) {
								return (
									<div style={[styles.piediv]} key={index}>

										<ProductInfoPieChart data={data.pie_chart ? data.pie_chart : null}>
											<MetaPrice style={{'top': '-10px'}} items={data.meta} />
										</ProductInfoPieChart>

									</div>
								)
							})}
							
							{this.state.data.filter(function(item, index){
								return index === self.state.activeTab;
							}).map(function(data, index) {
								if(!data.pie_chart) return null;
								return (
									<div style={{'position':'relative', 'height':'auto', 'display':'block'}} key={index} >


										<Trends style={{'top': '-1px'}} items={data.pie_chart.trends} />

									</div>
								)
							})}


							{this.state.data.filter(function(item, index){
								return index === self.state.activeTab;
							}).map(function(data, index) {
								return (
									<div style={{'position':'relative', 'height':'auto', 'display':'block'}} key={index} >

										<OrderedList style={{'top': '-1px'}} items={data.extra} />

									</div>
								)
							})}


						</div>
				</StyleRoot>
			);
	}
}

export default ProductInfo;
