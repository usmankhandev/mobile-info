import React from 'react';
import DatePickers from './date';

class AddNews extends React.Component {
    render() {
        return(
            <div className = "add-news">
                <form>
                <div class="input-field col s6">
						<input
							id="categoryname"
							type="text"
							class="validate"
							// onChange={this.handelChange}
							style={{ width: '500px' }}
						/>
						<label for="categoryname">Model Name</label>
					</div>
                    
                    <div class="input-field col s6">
						<input
							id="categoryname"
							type="text"
							class="validate"
							// onChange={this.handelChange}
							style={{ width: '500px' }}
						/>
						<label for="categoryname">Description</label>
					</div>
					<div class="input-field col s6">
                        <DatePickers/>
						{/* <label for="categoryname">News Date</label> */}
					</div>
                    <button class = "image">choose image </button>
                    <hr/>

					<button
						class="btn waves-effect waves-light"
						type="submit"
						name="action"
						// onClick={this.handleSubmit}
					>
						Add
					</button>                
                    </form>
            </div>
        );
    }
}

export default AddNews;