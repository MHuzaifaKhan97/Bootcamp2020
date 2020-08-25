import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    },
    table: {
        minWidth: 650,
    },
}));

export default function CountryStats() {
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
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Countries Name</TableCell>
                            <TableCell align="right">Total Cases</TableCell>
                            <TableCell align="right">Total Active Cases</TableCell>
                            <TableCell align="right">Total Recovered Cases</TableCell>
                            <TableCell align="right">Total Deaths</TableCell>
                            <TableCell align="right">Total New Cases</TableCell>
                            <TableCell align="right">Total New Active Cases</TableCell>
                            <TableCell align="right">Total New Active Deaths Today</TableCell>
                        </TableRow>
                    </TableHead>

                    {globalData.map((val, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {globalData[index].title}
                                </TableCell>
                                <TableCell align="right">{globalData[index].total_cases}</TableCell>
                                <TableCell align="right">{globalData[index].total_cases}</TableCell>
                                <TableCell align="right">{globalData[index].total_recovered}</TableCell>
                                <TableCell align="right">{globalData[index].total_deaths}</TableCell>
                                <TableCell align="right">{globalData[index].total_new_cases_today}</TableCell>
                                <TableCell align="right">{globalData[index].total_active_cases}</TableCell>
                                <TableCell align="right">{globalData[index].total_new_deaths_today}</TableCell>
                            </TableRow>
                            // <tr>
                            //     <td>
                            //         {globalData[index].title}
                            //     </td>
                            //     <td>
                            //         {globalData[index].total_cases}
                            //     </td>
                            //     <td>
                            //         {globalData[index].total_active_cases}
                            //     </td>
                            // </tr>
                        )
                    }

                    )}
                </Table>
            </TableContainer>
        </div>
    );
}
