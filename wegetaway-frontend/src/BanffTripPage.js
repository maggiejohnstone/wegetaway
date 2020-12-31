import './styles/TripPage.css';
import AddFriendsButton from "./AddFriendsButton";

function BanffTripPage() {
    return (
        <div className="Main">
            <h1>Banff Trip</h1>
            <h2 className="date">September 3 - September 10, 2020</h2>
            <AddFriendsButton />
            <p className="PageContent">Add the information about your trip here</p>
        </div>
    );
}

export default BanffTripPage;