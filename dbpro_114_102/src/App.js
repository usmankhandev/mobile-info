import React from 'react';
import Login from './components/admin/login';
import Dashboard from './components/admin/dashboard/dashboard';
import AdminDashboard from './components/administration/dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Route
						path="/admin"
						render={props => (
							<div>
								<Login />
							</div>
						)}
					/>
					<Route
						exact
						path="/"
						render={props => (
							<div>
								{console.log(props)}
								<Dashboard />
							</div>
						)}
					/>
					<Route
						exact
						path="/administration"
						render={props => (
							<div>
								{console.log(props)}
								<AdminDashboard />
							</div>
						)}
					/>
				</Router>
			</Provider>
		);
	}
}

export default App;
