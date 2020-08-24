import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: "#3f51b5",
        padding: 5,
        margin: 5,
    }
}));

export default function InfoPanel() {
    const classes = useStyles();
    const [globalData, setGlobalData] = useState({})
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let data = await response.json();
            console.log(data.results[0]);
            delete data.results[0].source;
            setGlobalData(data.results[0]);
            // console.log(globalData)

        }
        getData();
    }, [])



    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {Object.keys(globalData).map((val, index) => {
                    return (<Grid item xs={12} sm={4} key={index}>
                        <Paper
                            className={classes.paper}
                            elevation={3}>
                            <h4 className={classes.title}>{val.replace(/_/g, " ").toUpperCase()}</h4>
                            <h4>  {globalData[val]}</h4>
                        </Paper>
                    </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}
