import './styles/landing.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter} from 'react-router-dom';

/* import all the "pages" you want to use in the router*/
import MyTrips from './MyTrips';
import MyFriends from './MyFriends';
import TripPage from './TripPage';
import AddTrip from "./AddTrip";
import AddFriend from "./AddFriend";
import DropTables from "./DropTables";


function Landing() {
    const user = "1";
    return (
        <div className='landing'>
            <BrowserRouter>
                <Link to="/myTrips">
                    <button className='menuButton'>My Trips</button>
                </Link>
                <Link to={`/friends/${user}`}>
                    <button className='menuButton'>My Friends</button>
                </Link>
                <Link to="/dropDB">
                    <button className='menuButton'>Empty Database</button>
                </Link>
                <Route path="/dropDB">
                    <DropTables />
                </Route>
                <Route path="/myTrips">
                    <MyTrips/>
                </Route>
                <Route path="/newTrip">
                    <AddTrip/>
                </Route>
                <Route path="/newFriend">
                    <AddFriend/>
                </Route>
                <Route path={`/friends/:userId`} component={MyFriends}/>
                <Route path={`/trip/:tripId`} component={TripPage}/>
            </BrowserRouter>


        </div>
    );
}

export default Landing;