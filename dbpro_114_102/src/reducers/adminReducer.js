import { LOGIN_ADMIN } from '../actions/types';

const initialState = {
	// students: [],
	admin: {},
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOGIN_ADMIN:
			console.log('reducer is working correctly');
			return {
				...state,
				admin: action.payload,
			};
		default:
			return state;
	}
}
