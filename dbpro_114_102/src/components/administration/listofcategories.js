import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { FetchCategories } from '../../actions/categoryActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

class ListOfAllCategories extends React.Component {
	componentWillMount() {
		this.props.FetchCategories();
	}

	render() {
		const categoriesList = this.props.categories.map(category => (
			<div>
				{/* <h1>{category.categoryName}</h1> */}

				<table>
					<thead>
						<tr>
							<th>Category Name</th>
							<th>Edit</th>
							<th>Delete</th>
							<th>Add Mobile</th>
						</tr>
					</thead>
					<tbody>
						<tr key={category.categoryId}>
							<td>{category.categoryName}</td>
							<td>
								<IconButton aria-label="Edit">
									<EditIcon />
								</IconButton>
							</td>
							<td>
								<IconButton aria-label="Delete">
									<DeleteIcon />
								</IconButton>
							</td>
							<td>
								<Button variant="contained">Add Mobile</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		));
		return (
			<div className="all-categories">{categoriesList}</div>

			/* // <div className="all-mobiles">
				// <table>
			// 		<thead>
			// 			<tr>
			// 				<th>Category Name</th>
			// 				<th>Edit</th>
			// 				<th>Delete</th>
			// 				<th>Add Mobile</th>
			// 			</tr>
			// 		</thead>

			// 		<tbody>
			// 			<tr>
			// 				<td>Sumsung</td>
			// 				<td>
			// 					<IconButton aria-label="Edit">
			// 						<EditIcon />
			// 					</IconButton>
			// 				</td>
			// 				<td>
			// 					<IconButton aria-label="Delete">
			// 						<DeleteIcon />
			// 					</IconButton>
			// 				</td>
			// 				<td>
			// 					<Button variant="contained">Add Mobile</Button>
			// 				</td>
			// 			</tr>

			// 			<tr>
			// 				<td>Sumsung</td>
			// 				<td>
			// 					<IconButton aria-label="Edit">
			// 						<EditIcon />
			// 					</IconButton>
			// 				</td>
			// 				<td>
			// 					<IconButton aria-label="Delete">
			// 						<DeleteIcon />
			// 					</IconButton>
			// 				</td>
			// 				<td>
			// 					<Button variant="contained">Add Mobile</Button>
			// 				</td>
			// 			</tr>
			// 			<tr>
			// 				{/* <tr> */
			// 				<td>Sumsung</td>
			// 				<td>
			// 					<IconButton aria-label="Edit">
			// 						<EditIcon />
			// 					</IconButton>
			// 				</td>
			// 				<td>
			// 					<IconButton aria-label="Delete">
			// 						<DeleteIcon />
			// 					</IconButton>
			// 				</td>
			// 				<td>
			// 					<Button variant="contained">Add Mobile</Button>
			// 				</td>
			// 			</tr>
			// 		</tbody>
			// 	</table> */}
			// </div>
		);
	}
}

ListOfAllCategories.propTypes = {
	FetchCategories: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	categories: state.categories.categories,
});

export default connect(
	mapStateToProps,
	{ FetchCategories }
)(ListOfAllCategories);
