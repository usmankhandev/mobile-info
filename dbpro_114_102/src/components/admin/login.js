import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid container direction="column" alignItems="center" style={{ marginTop: 100 }}>
				<Typography component="h5" variant="h3">
					Recovery Password
				</Typography>
				<Grid item style={{ width: 300 }}>
					<input type="text" placeholder="E_mail" fullWidth margin="normal" />
					<input type="password" placeholder="Password" fullWidth margin="normal" />
					<input type="password" placeholder="Confirm Password" fullWidth margin="normal" />
					<button
						margin="normal"
						style={{ width: 300, height: 30, fontWeight: 'bold', fontSize: 20 }}
						type="submit"
					>
						Resest
					</button>
					<br />
					{/* <a>
						<label style={{ cursor: 'pointer' }}>Not Registered?</label>
						<label style={{ cursor: 'pointer', color: 'green' }}> Create an account</label>
					</a> */}
				</Grid>
			</Grid>
		);
	}
}
export default Login;
