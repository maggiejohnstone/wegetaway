import React from 'react';
import {MenuList, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from './Theme';
import "./styles/Home.css";
import {Route, Link, BrowserRouter} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import DropTables from "./DropTables";
import MyTrips from "./MyTrips";
import AddTrip from "./AddTrip";
import AddFriend from "./AddFriend";
import MyFriends from "./MyFriends";
import TripPage from "./TripPage";
import Profile from "./Profile";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {

        },
    },
}));

export default function Home() {
    const classes = useStyles();
    const user = "1";
    return (
        <div className={classes.root}>
            <MenuList>
                <MenuItem component={Link} to="/">Profile</MenuItem>
            </MenuList>
        </div>
    );
}