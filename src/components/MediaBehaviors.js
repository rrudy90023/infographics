import React from 'react';

import TimeSpentOnMedia from './TimeSpentOnMedia';
import ScreenActivities from './ScreenActivities';
import SocialMedia from './SocialMedia';
import LocalNuance from './LocalNuance';


class MediaBehaviors extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){
		return (
			<div style={{'backgroundColor':'#f7f7f7', 'fontSize': '16', 'padding': '0', 'margin':'0', 'position': 'relative', 'top':'-22px'}}>

				<TimeSpentOnMedia data={this.state.data.time_spent_on_media_per_day} />
				<SocialMedia data={this.state.data.top_social_media} />
				<ScreenActivities data={this.state.data.top_screen_activities} />
				
				<LocalNuance data={this.state.data.local_nuances} />
			</div>
		);
	}
}

export default MediaBehaviors;