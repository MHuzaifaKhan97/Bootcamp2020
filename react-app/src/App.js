import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import './App.css';
import Navbar from './NavBar';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    height: 400,
    width: 600,
    margin: '0 auto',
    textAlign: "center",
  },
  input: {
    width: '80%',
    margin: 20,
  },
  button: {
    width: '80%',
  }
}));


function App() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <h1>Login</h1>
          <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Enter Email..." className={classes.input} /> <br />
            <TextField id="standard-basic" type="password" label="Enter Password..." className={classes.input} />  <br /> <br />
            <Button variant="contained" color="primary" className={classes.button} >
              Primary
          </Button>
          </form>
          
        </Paper>
      </div>
        <BarChart />
        <LineChart />
        <PieChart />
    </React.Fragment>
  );
}

export default App;
