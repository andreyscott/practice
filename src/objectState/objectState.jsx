import { useState } from "react";

export default function User() {
    const [user, setUser] = useState({ name: "", city: "", age: 50});
    console.log(user);

    const handleChange = (e) => {
        setUser({ ...user, name : e.target.value });
    };

    return (
        <div>
            <h1>Object State</h1>
            <p>Name: {user.name}</p>
            <p>City: {user.city}</p>
            <p>Age: {user.age}</p>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="city"
                value={user.city}
                onChange={handleChange}
            />
            <input
                type="text"
                name="age"
                value={user.age}
                onChange={handleChange}
            />
        </div>
    );
}