import React from 'react';
import DatePickers from './date';

class AddMobile extends React.Component {
    render() {
        return(
            <div className = "add-mobile">
                <form>
                    <label>Browser Select</label>
                    <select class="browser-default" style={{ width: '500px' }}>
                    <option value="" disabled selected>Select Category Name</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    </select>

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
						<label for="categoryname">Ram</label>
					</div>
					<div class="input-field col s6">
						<input
							id="categoryname"
							type="text"
							class="validate"
							// onChange={this.handelChange}
							style={{ width: '500px' }}
						/>
						<label for="categoryname">News Date</label>
					</div>

					<div class="input-field col s6">
						<input
							id="categoryname"
							type="text"
							class="validate"
							// onChange={this.handelChange}
							style={{ width: '500px' }}
						/>
						<label for="categoryname">Battery</label>
					</div>
                    <div class="input-field col s6">
						<input
							id="categoryname"
							type="text"
							class="validate"
							// onChange={this.handelChange}
							style={{ width: '500px' }}
						/>
						<label for="categoryname">Market Price</label>
					</div>

                    					<div class="input-field col s6">
						<input
							id="categoryname"
							type="text"
							class="validate"
							// onChange={this.handelChange}
							style={{ width: '500px' }}
						/>
						<label for="categoryname">Shape</label>
					</div>

                    <div class="input-field col s6">
						<DatePickers/>						
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

export default AddMobile;