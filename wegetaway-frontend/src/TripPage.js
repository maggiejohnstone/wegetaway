import React from "react";
import {Link} from "react-router-dom";
import defaultImage from "./default-image.svg";
import addImage from "./addTripButton.png";
import TripLink from "./TripLink";

class TripPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: null,
            tripId: null,
        };
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        this.state.tripId = params.tripId;
        fetch(`http://localhost:8080/getSingleTrip?id=${params.tripId}`,)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(JSON.stringify(result));
                    this.setState({
                        isLoaded: true,
                        item: result.item,
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
                        item: null
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, item, tripId} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>{item.name}</h1>
                    <h2>{item.date}</h2>

                </div>
            );
        }
    }
}

export default TripPage;