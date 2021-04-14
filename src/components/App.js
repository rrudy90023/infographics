import React from 'react';
// import createBrowserHistory from 'history/lib/createBrowserHistory'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Geos from './Geos';
import Geo from './Geo';


class App extends React.Component {

	render() {	
		return (
			<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
				<Switch>
			      <Route exact path="/geos" component={Geos}/>
			      <Route path="/geo/:geo" component={Geo}/>
			      <Redirect from="/" to="/geos" />
			    </Switch>
			</BrowserRouter>
		);
	}
}

export default App;
