import React from "react";
import TripLink from "./TripLink";
import './styles/tripLink.css';
import {BrowserRouter, Link} from "react-router-dom";
import defaultImage from "./default-image.svg";
import addImage from "./addTripButton.png";

class MyTrips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            name: props.name,
            image: props.image,
            data: props.data,
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/getTrips")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items,
                        error: null
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error,
                        items: []
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>My Trips</h1>
                    <Link to={"newTrip"}>
                    <img className={"addImage"} src={addImage} alt="Logo" />
                    </Link>
                    <ul className={"tripList"}>
                        {items.map(item => (
                            <li key={item.id}>
                                <TripLink
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    date={item.date}
                                    body={item.body}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default MyTrips;
