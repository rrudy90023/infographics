import React from 'react';

import { Motion, spring } from 'react-motion';
import { Waypoint } from 'react-waypoint';
import {StyleRoot} from 'radium';

var socPaths = {
	facebook: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/facebook.svg',
	instagram: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/instagram.svg',
	pinterest: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/pinterest.svg',
	twitter:  'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/twitter.svg',
	youtube:  'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/youtube.svg',
	linkedin:  'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/linkedin.svg',
	mixi: 	'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/mixi.svg',
	line:  	'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/line.svg',
	cymworld_mimi_hompy: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/cymworld_mimi_hompy.svg',
	kakao_group: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/kakao_group.svg',
	kakaostory: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/kakaostory.svg',
	QQ: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/QQ.svg',
	qzone: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/qzone.svg',
	wechat: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/wechat.svg',
	weibo: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/weibo.svg',
	whatsapp: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/whatsapp.svg',
	skype: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/skype.svg',
	google_plus: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/google_plus.svg',
	facebook_messenger: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/facebook_messenger.svg',
	shazam: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/shazam.svg',
	Odnoklassniki: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/Odnoklassniki.svg',
	vkontakte: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/vkontakte.svg',
	mystery_app:	'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/mystery_app.svg',
	naver_band:	'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/naver_band.svg',
	reddit:	'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/icons/reddit.svg'

};


class SocialMedia extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data,
			fired: false
		}
	}


	_handleWaypointEnter(){
		if (!this.state.fired){
			this.setState({fired:true})
		}
	}

	_handleWaypointLeave(){
		if (this.state.fired){
			this.setState({fired:false})
		}
	}


	render(){

		var styles = {
			mobile: {
				backgroundColor: '#ffffff',
				position:	'relative', 
				textAlign:	'center',
				height: 	'auto',
				padding: 	'0 0 80px 0',
				listStyleType: 'none',
				marginLeft: 'auto',
				marginRight: 'auto',
				display: 'block',
				fontSize: '16px',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
				marginBottom: '100px',
				marginTop: '80px',
				width: '100%',

					'@media (min-width: 768px)': {
						width: '80%'
					}
			},

			pinkbar: {
				backgroundColor: '#fc4bd1',
				textAlign: 'center',
				height: '60px',


					'@media (min-width: 768px)': {
						height: '5px',

					}
			},

			pbp: {
				color: '#ffffff',
				textTransform: 'uppercase',
				fontSize: '18px',
				position: 'relative',
				top: '20px',
				letteSpacing: '2px',

					'@media (min-width: 768px)': {
						color: '#000000',
						textTransform: 'capitalize',
						fontSize: '20px',
						letterSpacing: '0px',
						top: '30px'
					},


					'@media (min-width: 1440px)' : {
						fontSize: '26px'

					}					


			},

			bubblecont: {
				position: 'relative',
				width: '40%',
				height: '100%',
				textAlign: 'center',
				display: 'inline-block',

					'@media (min-width: 768px)': {
						width: '150px'
					}
			},


			percont: {
				position: 'relative',
				width: '40%',
				height: '100%',
				display: 'inline-block',

					'@media (min-width: 768px)': {
						width: '80px',
						left: '10px'
					}
			}
		}


		var blocker = this.state.data.hasOwnProperty('no_data_available') === true ? "none" : "inline-block";
		var subber = this.state.data.hasOwnProperty('no_data_available') === true ? "block" : "none";
		
		var dyndis = {
			rowcont: {
				width: '100%',
				position: 'relative',
				height: '150px',
				textAlign: 'center',
				display: blocker,

					'@media (min-width: 768px)': {
						width: '50%'
					}
			}
		}	

		var mostTimeSpent = null;
		var dataset = [];

		if(this.state.fired){
			dataset = Object.keys(this.state.data).map(function(type){
				return {type: type, timeSpent: this.state.data[type] }
			}.bind(this)).sort(function(a, b){
				return b.timeSpent - a.timeSpent;
			}).map(function(row, index, rows){
				if(index === 0) mostTimeSpent = row.timeSpent;
				
				var circWidth = index === 0 ? 150 : Math.floor((row.timeSpent/rows[0].timeSpent)*100+45);

				return <div style={[dyndis.rowcont]} key={index}>
						
							<Motion defaultStyle={{width: 0}} style={{width: spring(circWidth, {stiffness: 100, dampness: 100})}}>
								  
								  {val => {
								  	
								  	var socput = socPaths[row.type];

								  	var socStyles = {
								  		width 		: 	val.width,
										position	: 	'relative',
										height 		: 	'150px'
								  	}

								  	return <div style={[styles.bubblecont]}><div style={{'textAlign':'center', 'margin':'auto', 'position':'absolute', 'top':'0px', 'left':'0px', 'bottom':'0px', 'right':'0px', 'width':'100%', 'height':'100%'}}><img src={socput} style={socStyles} alt="" />{val.x}</div></div>
								  }}

							</Motion>

							<div style={[styles.percont]}><div style={{'textAlign':'center', 'margin':'auto', 'position':'absolute', 'top':'0px', 'left':'0px', 'bottom':'0px', 'right':'0px', 'width':'100%', 'height':'39px'}}><span style={{'color': '#fc4bd1', 'fontSize': window.screen.width === 1440 ? '41px' : '31px', 'height': '80px', 'width': '80px', 'position': 'relative', 'fontWeight':'200!important'}}>{row.timeSpent}%</span></div></div>
						</div>
			});
		}

		return (
			<StyleRoot>
				<div style={[styles.mobile]}>
					<div style={[styles.pinkbar]} className="pinkbar"><p style={[styles.pbp]}>Top Social Media</p></div>
					<Waypoint
				  	onEnter={this._handleWaypointEnter.bind(this)}
				  	threshold={0}/>	
				  	<div style={{'display': subber}}><div style={{'width':'100%', 'textAlign':'center'}}><span style={{'position': 'relative', 'display': 'inline-block', 'height': '100px', 'color': '#fc4bd1', 'fontSize': '24px', 'fontWeight': '200!important', 'top':'30px'}}>No data available</span></div></div>
					{dataset}
				</div>
			</StyleRoot>
		);
	}
}


export default SocialMedia;














