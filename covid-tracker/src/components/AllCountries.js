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

export default function AllCountries() {
    const classes = useStyles();
    const [globalData, setGlobalData] = useState([{}])
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            // console.log(data.countryitems[0]);
            // setGlobalData(Object.values(data.coutryitems))
            setGlobalData(Object.values(Object.values(data.countryitems)[0]))
        }
        getData();
    }, [])


    return (
        <div className={classes.root}>
            {/* <Grid container spacing={2}> */}
            <table>
                <tr>
                    <th>Countries Name</th>
                    <th>Total Cases</th>
                    <th>Total Active Caseh</th>
                </tr>
                {globalData.map((val, index) => {
                    return (
                        <tr>
                            <td>
                                {/* {globalData[0]} */}
                                {globalData[index].title}
                            </td>
                            <td>
                                {globalData[index].total_cases}
                                {/* <h4 className={classes.title}>{val}</h4> */}
                            </td>
                            <td>
                                {globalData[index].total_active_cases}
                                {/* <h4>  {globalData[0][val]}</h4> */}
                            </td>
                        </tr>
                    )
                }

                )}

            </table>
        </div>
    );
}
