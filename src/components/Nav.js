import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../data.js';
import {StyleRoot} from 'radium';

var flagPaths = {
  us: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/us.svg',
  ca: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/ca.svg',
  au: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/au.svg',
  jp: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/jp.svg',
  kr: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/kr.svg',
  cn: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/cn.svg',
  hk: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/hk.svg',
  uk: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/uk.svg',
  fr: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/fr.svg',
  de: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/de.svg',
  es: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/es_p.png',
  it: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/it.svg',
  ch: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/ch.svg',
  uae: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/uae.svg',
  tr: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/tr.svg',
  ru: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/ru.svg',
  br: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/br.svg',
  mx: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/mx_p.png',
  cl: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/cl.svg',
  co: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/co.svg',
  sg: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/sg.svg',
  th: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/th.svg',
  my: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/my.svg',
  id: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/id.svg',
  ind: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/in.svg'
};




class Nav extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data,
			update: props.update,
			info: Data,
			geo: props.data.geo
		}
	}


	update(section){

		var huli = document.querySelector(".header-nav ul > li");

		var ov = document.querySelector(".header-nav ul li:nth-child(1)");
		var mb = document.querySelector(".header-nav ul li:nth-child(2)");
		var tt = document.querySelector(".header-nav ul li:nth-child(3)");
		var am = document.querySelector(".header-nav ul li:nth-child(4)");


		this.state.update(section);

		if(section === 0){
			
			ov.className = "bluetab";
			mb.className = "blkstroke";
			tt.className = "blkstroke";
			am.className = "blkstroke";

		} else if (section === 1) {

			ov.className = "blkstroke";
			mb.className = "pinktab";
			tt.className = "blkstroke";
			am.className = "blkstroke";

		} else if (section === 2 ){

			ov.className = "blkstroke";
			mb.className = "blkstroke";
			tt.className = "orangetab";
			am.className = "blkstroke";

		} else if (section === 3) {

			ov.className = "blkstroke";
			mb.className = "blkstroke";
			tt.className = "blkstroke";
			am.className = "greentab";

		};

	}


	render(){

		var flag = flagPaths[this.state.data.geo];

		var styles = {
			mobile: {
				backgroundColor: '#383838',
				position:	'relative', 
				textAlign:	'center',
				height: 	'50px',
				padding: 	'0',
				listStyleType: 'none',
				marginLeft: 'auto',
				marginRight: 'auto',

					'@media (min-width: 768px)': {
						width: '80%'
					}
			},

			trimmobile: {
				backgroundColor: '#383838',
				position:	'relative',
				textAlign:	'center',
				height: 	'3px',
				padding: 	'0',
				listStyleType: 'none',
				fontSize: 	'0',
				marginLeft: 'auto',
				marginRight: 'auto',

					'@media (min-width: 768px)': {
						width: '80%'
					}
			},

			headtop: {
				backgroundColor: '#383838',	
				height: '70px',

					'@media (min-width: 768px)': {
						backgroundColor: '#f7f7f7',
					}
			}
		}



		return(

				<StyleRoot>
					<div className="header-nav">
						<div>
							<div style={[styles.headtop]}>
								<Link to='/geos' style={{'width':'100%', 'height':'70px', 'position':'relative'}}>
									<img src='https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/gps.svg' style={{'position': 'relative', 'left': '7px', 'top': '15px', 'width':'25px', 'float':'left'}} alt="" />						
									<img src={flag} style={{'display': 'inline-block', 'cursor': 'pointer', 'textAlign': 'center', 'width': '32px', 'position': 'relative', 'top': '19px'}} alt="" />
									<span style={{'fontSize': '24px', 'top': '12px', 'position': 'relative'}}>  /  {this.state.data.country}</span>
								</Link>
							</div>
						</div>
						<ul style={[styles.mobile]}>
							<li onClick={this.update.bind(this, 0)} className="bluetab"><Link to='#'><span>Overview</span></Link></li>
							<li onClick={this.update.bind(this, 1)} className="blkstroke"><Link to='#'><span>Media Behavior</span></Link></li>
							<li onClick={this.update.bind(this, 2)} className="blkstroke"><Link to='#'><span>Tech Trends</span></Link></li>
							<li onClick={this.update.bind(this, 3)} className="blkstroke"><Link to='#'><span>Apple In Market</span></Link></li>
						</ul>
						<div className="nav-trim" style={[styles.trimmobile]}>
							<div style={{'backgroundColor': '#039fda'}}></div>
							<div style={{'backgroundColor': '#fc4bd1'}}></div>
							<div style={{'backgroundColor': '#f08817'}}></div>
							<div style={{'backgroundColor': '#4cb02d'}}></div>
						</div>
					</div>
				</StyleRoot>



		)
	}
}


export default Nav;