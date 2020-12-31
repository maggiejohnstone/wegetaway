import React from "react";
import {Link} from "react-router-dom";
import defaultImage from "./default-image.svg";
import {useState} from 'react';
import "./styles/tripLink.css";

export const AddFriend = ({set}) => {


    const [getCurrentUser, setCurrentUser] = useState('');
    const [getFriend, setFriend] = useState('');

    return (
        <>
            <h3> Add Friends </h3>
            <div>
                <input
                    type="text"
                    placeholder="Current User"
                    value={getCurrentUser}
                    onChange={e => setCurrentUser(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Add This User"
                    value={getFriend}
                    onChange={e => setFriend(e.target.value)}
                />
            </div>
            <button onClick={(e) => {
                fetch('http://localhost:8080/addUser', {
                    method: 'POST',
                    body: `{
                        "userOne": "${getCurrentUser}",
                        "userTwo": "${getFriend}"
                    }`,
                    headers: {'Content-type': 'application/json'}
                }).then();
            }
            }> Submit
            </button>
        </>
    );


}

export default AddFriend;