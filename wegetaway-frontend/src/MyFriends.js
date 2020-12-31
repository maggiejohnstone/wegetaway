import {Link} from "react-router-dom";
import addImage from "./addTripButton.png";
import TripLink from "./TripLink";
import React from 'react';
import defaultImage from "./default-image.svg";
import userImage from "./user-image.svg";

class MyFriends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            userId: null,
        };
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        this.state.userId = params.userId;
        fetch(`http://localhost:8080/getUsersFriends?id=${params.userId}`,)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(JSON.stringify(result));
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
                        items: null
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items, userId} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Link to={"/newFriend"}>
                        <img className={"addImage"} src={addImage} alt="Logo"/>
                    </Link>
                    <ul className={"tripList"}>
                        {items.map(item => (
                            <li key={item.id}>
                                <TripLink
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default MyFriends;