import React from 'react';
import corona from './img/corona.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    left:{
        marginTop:60,
        textAlign:'center',
        fontFamily:'arial',
        paddingLeft:10,
    },
    left_p:{
        textAlign:'left',
        margin:5,
        paddingLeft:20,
        marginTop:20,
    },
    left_h:{
        margin:'10px 0',
    }
}));

const Home = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item className={classes.left} md={12} sm={12} xs={12}>
                    <h1 className={classes.left_h} >What is Corona Virus?</h1>
                    <p className={classes.left_p}>COVID-19 is the disease caused by the new coronavirus that emerged in China in December 2019.
                    COVID-19 symptoms include cough, fever or chills, shortness of breath or difficulty breathing, muscle or body aches, sore
                    throat, new loss of taste or smell, diarrhea, headache, new fatigue, nausea or vomiting and congestion or runny nose. COVID-19
                    can be severe, and some cases have caused death. The new coronavirus can be spread from person to person. It is diagnosed with a
                    laboratory test. There is no coronavirus vaccine yet. Prevention involves frequent hand-washing, coughing into the bend of your
                    elbow, staying home when you are sick and wearing a cloth face covering if you can't practice physical distancing.</p>
                    <h1 className={classes.left_h} >How does the new coronavirus spread?</h1>
                    <p className={classes.left_p}>As of now, researchers know that the new coronavirus is spread through droplets released into the air when an infected person coughs or sneezes. The droplets generally do not travel more than a few feet, and they fall to the ground (or onto surfaces) in a few seconds — this is why physical distancing is effective in preventing the spread.</p>
                    <h1 className={classes.left_h}>How did this new coronavirus spread to humans?</h1>
                    <p className={classes.left_p}>COVID-19 appeared in Wuhan, a city in China, in December 2019. Although health officials are still tracing the exact source of this new coronavirus, early hypotheses thought it may be linked to a seafood market in Wuhan, China. Some people who visited the market developed viral pneumonia caused by the new coronavirus. A study that came out on Jan. 25, 2020, notes that the individual with the first reported case became ill on Dec. 1, 2019, and had no link to the seafood market. Investigations are ongoing as to how this virus originated and spread. </p>
                    <img src={corona} height={200} />
                </Grid>
            </Grid>
        </div>
    )
}
export default Home;