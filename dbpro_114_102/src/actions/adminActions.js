import { LOGIN_ADMIN } from './types';

// Fetch All Students.
export function LoginAdmin(adminData) {
	return function(dispatch) {
		console.log('fetching');
		fetch('http://localhost:5000/auth', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(adminData),
		})
			.then(response => {
				console.log('this is json response');
				return response.json();
			})
			.then(data => {
				dispatch({
					type: LOGIN_ADMIN,
					payload: data.recordset,
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
}
