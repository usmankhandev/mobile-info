import { ADD_CATEGORY, FETCH_CATEGORIES } from '../actions/types';

const initialState = {
	categories: [],
	category: {},
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_CATEGORY:
			console.log('add category');
			return {
				...state,
				category: action.payload,
			};
		case FETCH_CATEGORIES:
			console.log('fetch categories');
			return {
				...state,
				categories: action.payload,
			};
		default:
			return state;
	}
}
