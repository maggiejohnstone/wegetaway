import React from "react";
import {Link} from "react-router-dom";
import defaultImage from "./default-image.svg";
import {useState} from 'react';
import "./styles/tripLink.css";

export const AddTrip = ({set}) => {


    const [getName, setName]    = useState('');
    const [getDate, setDate]    = useState('');
    const [getUser, setUser]    = useState('');



    return (

        <>
            <h3> New Trip </h3>


            <div>
                <input
                    type="text"
                    placeholder="Trip Name"
                    value={getName}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Month, Day - Month, Day, Year"
                    value={getDate}
                    onChange={e => setDate(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="User's name"
                    value={getUser}
                    onChange={e => setUser(e.target.value)}
                />
            </div>


            <button onClick={(e) => {


                fetch('http://localhost:8080/addTrip', {
                    method: 'POST',
                    body: `{
                        "name": "${getName}",
                        "date": "${getDate}",
                        "user": "${getUser}"
                    }`,
                    headers: {'Content-type': 'application/json'}
                })

                    .then();

            }
            }> Submit</button>


        </>
    );


}

export default AddTrip;