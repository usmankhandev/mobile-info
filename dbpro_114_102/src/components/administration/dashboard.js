import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AddCategory from './addCategory';
import ListofAllCategories from './listofcategories';
import AddMobile from './addMobile';
import AllMobiles from './mobile';
import AddNews from './addNews';
import News from './news';


const themes = createMuiTheme({
	palette: {
		primary: {
			light: '#6c5141',
			main: '#9b755d',
			dark: '#af907d',
			contrastText: '#fff',
		},
		secondary: {
			// light: '#ff7961',
			// main: '#f44336',
			// dark: '#ba000d',
			// contrastText: '#000',
			light: '#6c5141',
			main: '#9b755d',
			dark: '#af907d',
			contrastText: '#fff',
		},
	},
});

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
});

class ResponsiveDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: '',
		};
		this.handleListItem = this.handleListItem.bind(this);
		this.showMe = this.showMe.bind(this);
	}
	state = {
		mobileOpen: false,
	};

	handleDrawerToggle = () => {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};

	handleListItem = selectedItem => {
		this.setState({
			selectedItem: selectedItem,
		});
	};

	showMe = () => {
		if (this.state.selectedItem === 'AddCategories') {
			return (
				<div>
					<AddCategory />
				</div>
			);
		}
		if (this.state.selectedItem === 'ListofAllCategories') {
			return (
				<div>
					<ListofAllCategories />
				</div>
			);
		}
		if (this.state.selectedItem === 'AddMobile') {
			return <div><AddMobile/></div>;
		}
		if (this.state.selectedItem === 'Mobiles') {
			return <div><AllMobiles /></div>;
		}
		if (this.state.selectedItem === 'AddNews') {
			return <div><AddNews/></div>;
		}
		if (this.state.selectedItem === 'News') {
			return <div><News/></div>;
		}
		if (this.state.selectedItem === 'AllReviews') {
			return <div>List of all reviews given by visitor</div>;
		}
		if (this.state.selectedItem === 'Responses') {
			return <div>Responses given by user or visitor</div>;
		}
	};

	render() {
		const { classes, theme } = this.props;

		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					{[
						'AddCategories',
						'ListofAllCategories',
						'AddMobile',
						'Mobiles',
						'AddNews',
						'News',
						'AllReviews',
						'Responses',
					].map((text, index) => (
						<ListItem button key={text} onClick={() => this.handleListItem(text)}>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				{/* <Divider /> */}
			</div>
		);

		return (
			<MuiThemeProvider theme={themes}>
				<div className={classes.root}>
					<CssBaseline />
					<AppBar position="fixed" className={classes.appBar}>
						<Toolbar color="primary">
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={this.handleDrawerToggle}
								className={classes.menuButton}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" color="inherit" noWrap>
								Admin Dashboard
							</Typography>
						</Toolbar>
					</AppBar>
					{/* <PrimarySearchAppBar /> */}
					<nav className={classes.drawer}>
						{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
						<Hidden smUp implementation="css">
							<Drawer
								container={this.props.container}
								variant="temporary"
								anchor={theme.direction === 'rtl' ? 'right' : 'left'}
								open={this.state.mobileOpen}
								onClose={this.handleDrawerToggle}
								classes={{
									paper: classes.drawerPaper,
								}}
							>
								{drawer}
							</Drawer>
						</Hidden>
						<Hidden xsDown implementation="css">
							<Drawer
								classes={{
									paper: classes.drawerPaper,
								}}
								variant="permanent"
								open
							>
								{drawer}
							</Drawer>
						</Hidden>
					</nav>
					<main className={classes.content}>
						<div className={classes.toolbar} />
						{this.showMe()}
					</main>
				</div>
			</MuiThemeProvider>
		);
	}
}

ResponsiveDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
