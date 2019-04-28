import React from 'react';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import covermobile from '../img/covermobile.png';
import photoiphone from '../img/photo-1474823310278-5c40989a3fd5.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 345,
  }
});

function News(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>        
      <Grid container spacing={16}>
        <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
                  <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Software Engineering"
                    className={classes.media}
                    height="140"
                    src = {photoiphone}
                    title="IIphone"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Iphone
                  </Typography>
                  <Typography component="p">
                    Software engineering is the application of engineering to the development of software
                    in a systematic method
                  </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <Button size="small" color="primary">
                    Delete
                  </Button>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid xs={12} sm={4}>
        <Card className={classes.card}>
                  <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="OnePlus 6t"
                    className={classes.media}
                    height="140"
                    src = {covermobile}
                    title="OnePlus"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    OnePlus
                  </Typography>
                  <Typography component="p">
                  OnePlus is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data
                  </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <Button size="small" color="primary">
                    Delete
                  </Button>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid xs={12} sm={4}>
        <Card className={classes.card}>
                  <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Iphone"
                    className={classes.media}
                    height="140"
                    src = {photoiphone}
                    title="Iphone"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Iphone
                  </Typography>
                  <Typography component="p">
                    Iphone is an inter disciplarnry field that uses scientific methods, processes, algoorithms and systems to extract knowledge.
                  </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <Button size="small" color="primary">
                    Delete
                  </Button>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(News);
