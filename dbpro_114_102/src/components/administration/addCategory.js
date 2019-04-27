import React, { Component } from 'react';
import { createFileCoverage } from 'istanbul-lib-coverage';

class AddCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			CategoryName: '',
		};
	}

	handelChange = event => {
		this.setState({
			CategoryName: event.target.value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state.CategoryName);
	};

	render() {
		return (
			<div className="addcategory">
				<form>
					<div class="input-field col s6">
						<input
							id="categoryname"
							type="text"
							class="validate"
							onChange={this.handelChange}
							style={{ width: '500px' }}
						/>
						<label for="categoryname">Category Name</label>
					</div>
					<button
						class="btn waves-effect waves-light"
						type="submit"
						name="action"
						onClick={this.handleSubmit}
					>
						Add
					</button>
				</form>
			</div>
		);
	}
}

export default AddCategory;
