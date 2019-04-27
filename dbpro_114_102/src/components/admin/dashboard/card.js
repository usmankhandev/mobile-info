import React from 'react';
import covermobile from '../../img/covermobile.png';

class CardExample extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		return (
			<div class="row" style={{ margin: 10 }}>
				<div class="col s12 m3">
					<div class="card">
						<div class="card-image">
							<img src={covermobile} />
							<span class="card-title">Card Title</span>
						</div>
						<div class="card-content">
							<p>
								I am a very simple card. I am good at containing small bits of information. I am
								convenient because I require little markup to use effectively.
							</p>
						</div>
						<div class="card-action">
							{/* <a href="#">This is a link</a> */}
							<label>Price: Rs. 100</label>
						</div>
					</div>
				</div>

				<div class="col s12 m3">
					<div class="card">
						<div class="card-image">
							<img src={covermobile} />
							<span class="card-title">Card Title</span>
						</div>
						<div class="card-content">
							<p>
								I am a very simple card. I am good at containing small bits of information. I am
								convenient because I require little markup to use effectively.
							</p>
						</div>
						<div class="card-action">
							{/* <a href="#">This is a link</a> */}
							<label>Price: Rs. 100</label>
						</div>
					</div>
				</div>

				<div class="col s12 m3">
					<div class="card">
						<div class="card-image">
							<img src={covermobile} />
							<span class="card-title">Card Title</span>
						</div>
						<div class="card-content">
							<p>
								I am a very simple card. I am good at containing small bits of information. I am
								convenient because I require little markup to use effectively.
							</p>
						</div>
						<div class="card-action">
							{/* <a href="#">This is a link</a> */}
							<label>Price: Rs. 100</label>
						</div>
					</div>
				</div>

				<div class="col s12 m3">
					<div class="card">
						<div class="card-image">
							<img src={covermobile} />
							<span class="card-title">Card Title</span>
						</div>
						<div class="card-content">
							<p>
								I am a very simple card. I am good at containing small bits of information. I am
								convenient because I require little markup to use effectively.
							</p>
						</div>
						<div class="card-action">
							{/* <a href="#">This is a link</a> */}
							<label>Price: Rs. 100</label>
						</div>
					</div>
				</div>

				<div class="col s12 m3">
					<div class="card">
						<div class="card-image">
							<img src={covermobile} />
							<span class="card-title">Card Title</span>
						</div>
						<div class="card-content">
							<p>
								I am a very simple card. I am good at containing small bits of information. I am
								convenient because I require little markup to use effectively.
							</p>
						</div>
						<div class="card-action">
							{/* <a href="#">This is a link</a> */}
							<label>Price: Rs. 100</label>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CardExample;
