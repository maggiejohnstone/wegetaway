import React from "react";
import './styles/tripLink.css';
import defaultImage from './default-image.svg';
import {BrowserRouter, Link, Route} from "react-router-dom";
import TripPage from "./TripPage";

class TripLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            image: props.image,
            name: props.name,
            date: props.date,
            body: props.body,
        };
    }

    componentDidMount() {
        // fetch("http://localhost:8080/getTrips")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result.items,
        //                 error: null
        //             });
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error: error,
        //                 items: []
        //             });
        //         }
        //     )
    }

    render() {
        const {id, image, name, date, body} = this.state;
        console.log(JSON.stringify(image));
        return (
            <div className="tripLink">
            <Link to={`/trip/${id}`}>
                <img className={"tripImage"} src={defaultImage} alt="Logo" />
                <h2>{name}</h2>
                <h3>{date}</h3>
                <p>{body}</p>
            </Link>
            {/*<Route path={`/${id}`}>*/}
            {/*    <TripPage*/}
            {/*        id={id}*/}
            {/*        image={image}*/}
            {/*        name={name}*/}
            {/*        date={date}*/}
            {/*        body={body}*/}
            {/*    />*/}
            {/*</Route>*/}
            </div>

        );
    }
}

export default TripLink;