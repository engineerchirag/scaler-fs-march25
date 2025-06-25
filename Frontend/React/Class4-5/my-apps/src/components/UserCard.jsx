import { useState } from "react";

const UserCard = () => {
    let userData = {
        name: { first: "Jennie", last: "Nichols" },
        email: "jennie.nichols@example.com",
        dob: { age: 30 },
        location: { city: "Billings", country: "United States" },
        picture: { large: "https://randomuser.me/api/portraits/women/75.jpg" }
    };

    const [isVisible, setVisibility] = useState(false);
    return (
        <div>
            <h2>User Card</h2>
            <div className="user-data">
                <div className="row">
                    <div className="col">Name</div>
                    <div className="col">{userData.name.first} {userData.name.last}</div>
                </div>
                <div className="row">
                    <div className="col">Email</div>
                    <div className="col">{isVisible ? userData.email : '*******'} </div> 
                </div>
                <div className="row">
                    <div className="col">Age</div>
                    <div className="col">{userData.dob.age}</div>
                </div>
                <div className="row">
                    <div className="col">Location</div>
                    <div className="col">{userData.location.city}, {userData.location.country}</div>
                </div>
                <div className="row">
                    <div className="col">Picture</div>
                    <div className="col"><img src={userData.picture.large} /></div>
                </div>
                <div>
                    <button onClick={() => setVisibility(!isVisible)}>Toggle Sensitive Info</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard;