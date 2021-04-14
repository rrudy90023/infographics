import React from 'react';
import numeral from 'numeral';
import { StyleRoot } from 'radium';
//import Data from '../data.js';


var countrypaths = {
	avg_household_income: 'http://rudes.de/infog/images/icons/average_household_income.svg',
	gdp_growth_in_2014: 'http://rudes.de/infog/images/icons/gdp_growth_in_2014.svg',
	median_age: 'http://rudes.de/infog/images/icons/median_age.svg',
	national_language: 'http://rudes.de/infog/images/icons/national_language.svg',
	population: 'http://rudes.de/infog/images/icons/population.svg',
	unemployment_rate: 'http://rudes.de/infog/images/icons/unemployment_rate.svg',
	population_of_the_middle_class: 'http://rudes.de/infog/images/icons/population.svg',
	avg_income_of_the_middle_class_tier_1: 'http://rudes.de/infog/images/icons/average_household_income.svg',
	avg_income_of_the_middle_class_tier_2: 'http://rudes.de/infog/images/icons/average_household_income.svg',
	avg_income_of_the_middle_class: 'http://rudes.de/infog/images/icons/average_household_income.svg',
	population_of_the_upper_middle_class: 'http://rudes.de/infog/images/icons/population.svg',
	population_of_the_lower_middle_class: 'http://rudes.de/infog/images/icons/population.svg',
	avg_income_of_family_upper_middle_class: 'http://rudes.de/infog/images/icons/average_household_income.svg',
	avg_income_of_family_lower_middle_class: 'http://rudes.de/infog/images/icons/average_household_income.svg'
};

var longfonttext = {

	cn: "18px",
	ind: "18px",
	us: "31px",
	ru: "22px",
	hk: "18px",
	ch: "22px",
	it: "22px",
	ca: "22px",
	uk: "22px",
	fr: "21px",
	de: "22px",
	es: "22px",
	tr: "22px",
	br: "20px",
	mx: "22px",
	cl: "22px",
	sg: "18px",
	th: "20px",
	my: "22px",
	id: "22px",
	co: "22px"

}




class BasicCountryFacts extends React.Component {

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


		var styles = {
			mobile: {
				backgroundColor: '#ffffff',
				position:	'relative', 
				textAlign:	'left',
				height: 	'auto',
				padding: 	'0 0 80px 0',
				listStyleType: 'none',
				marginLeft: 'auto',
				marginRight: 'auto',
				display: 'block',
				fontSize: '16px',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
		
				marginBottom: '100px',
				top: '-14px',
				width: '100%',

					'@media (min-width: 768px)': {
						width: '80%'
					}
			},




			ptaghead: {
				color: '#ffffff',
				textTransform: 'uppercase',
				fontSize: '18px',
				position: 'relative',
				top: '20px',
				letterSpacing: '2px',

					'@media (min-width: 768px)' : {
						color: '#000',
						textTransform: 'capitalize',
						fontSize: '20px',
						letterSpacing: '0',
						top: '30px',
					},

					'@media (min-width: 1440px)' : {
						fontSize: '26px'
					}
			},




			bluehead: {
				backgroundColor: '#039fda',
				textAlign: 'center',
				height: '60px',

					'@media (min-width: 768px)': {
						height: '5px',

					}


			},



			laber: {
				width: '300px',
				left: '-27px',
				display: 'table-cell',
				position: 'relative',
				fontWeight: '600',
				height: '70px',
				padding: '0',
				margin: '0',
				verticalAlign: 'middle',

					'@media (max-width: 722px)': {
						width: '140px',
						fontSize: '11px',
					},

					'@media (max-width: 375px)': {
						left: '10px'
					},

					'@media (max-width: 320px)': {
						width: '100px'
					},

					'@media (min-width: 768px)' : {
						display: 'inline-block',
						width: '170px',
						left: '0',
						fontSize: '12px',
						height: 'auto',
						fontWeight: '300',
						verticalAlign: 'top'					
					},

					'@media (min-width: 1440px)' : {
						fontSize: '16px'
					}
			},

			imgpop : {
				display: 'table-cell',
				width: '25px',
				position: 'relative',
				marginLeft: '15px',
				fontSize: '0',
				verticalAlign: 'middle',
				height: '70px',
				paddingRight: '0px',

					'@media (min-width: 768px)' : {
						display: 'inline-block',
						width: '40px',
						marginLeft: '0',
					},

					'@media (min-width: 1440px)' : {
						width: '100%'
					}
			},

			press : {
				width: '181px',
				fontSize: '20px',
				display: 'table-cell',
				position: 'relative',
				color: '#039fda',
				marginRight: '15px',
				textAlign: 'right',
				fontWeight: '200!important',
				marginTop: '0',
				marginBottom: '0',
				verticalAlign: 'middle',
				height: '70px',
				paddingRight: '15px',

					'@media (min-width: 768px)' : {
						display: 'inline-block',
						textAlign: 'center',
						fontSize: '22px',
						marginRight: '0',
						paddingRight: '0',
						verticalAlign: 'top'
					},

					'@media (min-width: 1440px)' : {
						width: '100%',
						fontSize: '32px'
					},
			},

			labdiv : {
				width: '100%',
				position: 'relative',
				height: '70px',
				display: 'table',

					'@media (min-width: 768px)' : {
						display: 'inline-block',
						height: 'auto',
						width: '200px',
						textAlign: 'center',
						verticalAlign: 'top',
						marginBottom: '20px'
					},

					'@media (min-width: 1440px)' : {
						width: '323px'
					}
			},

			contbox : {
				width: '100%',

					'@media (min-width: 768px)' : {
						width: '614px',
						textAlign: 'center',
						marginRight: 'auto',
						marginLeft: 'auto'
					},

					'@media (min-width: 1440px)' : {
						width: '969px'
					}
			}
		}


		var datapoints = [],
			iterator = 0;


		for(var point in this.state.data){

			var basicicons = countrypaths[point]
			var longcountry = longfonttext[this.state.geo]

			

			if(point === 'cultural_backround') continue;
			var label = <label style={[styles.laber]}>{point.toUpperCase().replace(/_/g, ' ')}</label>
			var number = this.state.data[point];
			var pics = <img src={basicicons} style={[styles.imgpop]} alt=""/>
			if (point === 'population'){
				number = numeral(number).format('0,0');
			} else if(point === 'avg_household_income'){
				number = numeral(number).format('$0,0.00')
			} else if (point === 'gdp_growth_in_2014'){
				number = numeral(number/100).format('0%')
			}

			var line = <div style={[styles.labdiv]} key={iterator}>{pics}{label}<p style={[styles.press]}>{number}</p></div>
			datapoints.push(line)
			iterator++
		}

		return (
			<StyleRoot>
				<div style={[styles.mobile]}>
						<div className="bluehead" style={[styles.bluehead]}><p style={[styles.ptaghead]}>Basic Country Facts</p></div>
						<div style={[styles.contbox]}>{datapoints}</div>
				</div>
			</StyleRoot>
		);
	}

}




export default BasicCountryFacts;