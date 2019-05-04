import { FETCH_CATEGORIES, ADD_CATEGORY } from './types';

// ADD Category Action.
export function AddCategory(categoryData) {
	return function(dispatch) {
		console.log('adding category action is dispatching');
		fetch('http://localhost/api/category/add', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(categoryData),
		})
			.then(response => {
				console.log('response of add category');
				return response.json();
			})
			.then(data => {
				dispatch({
					type: ADD_CATEGORY,
					payload: data.recordset,
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
}

// Fetching Categories

export function FetchCategories() {
	return function(dispatch) {
		console.log('fetching all categories');
		fetch('http://localhost/api/categories', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
        });
        .then(response => {
            console.log('response of fetchcategories');
            return response.json();
        })
        .then(data => {
            dispatch({
                type: FETCH_CATEGORIES,
                payload: data.recordset,
            });
        })
        .catch(err => {
            console.error(err);
        });
	};
}
