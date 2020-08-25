import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import Home from './Home';
import GlobalStats from './GlobalStats';
import CountryStats from './CountryStats';
import Graph from './Graph';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navText: {
        color: '#efefef',
        textTransform: 'uppercase',
        fontFamily: 'arial',
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: '0 5px',

    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            COVID TRACKING APP
          </Typography>

                        <Link to='/' className={classes.navText}>Home</Link>
                        <Link to='/globalstats' className={classes.navText}>Global Stats</Link>
                        <Link to='/countrystats' className={classes.navText}>Country Stats</Link>
                        <Link to='/graph' className={classes.navText}>Graph</Link>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/globalstats" component={GlobalStats} />
                    <Route path="/countrystats" component={CountryStats} />
                    <Route path="/graph" component={Graph} />
                    <Route path="*" component={() => <h1>404 Not Found</h1>} />
                </Switch>
            </Router>
        </div>
    );
}
