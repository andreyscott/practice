import { useState } from "react";

export default function Form () {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        zip: "",
        
    });
    console.log(form);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    return (
        <form className="formclass">
            <input
            onChange={handleChange}
             type="text" name="firstName" 
            placeholder="First Name"
            className=""
            />
            <input type="text"
             name="lastName"
             onChange={handleChange}
             placeholder="Last Name"
                className=""
            />
            {/* email password zip code  */}
            <input type="email"
             name="email"
             onChange={handleChange}
             placeholder="Email"
                className=""
                />
            <input type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                    className=""
                    />
            <input type="number"
                name="zip"
                onChange={handleChange}
                placeholder="Zip Code"
                    className=""
                    />
            <button>Submit</button>
        </form>
    )
}