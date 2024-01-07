import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // setCount(count + 1);
        setCount((prev) => prev + 1);


    }

    return <> 
    <button 
    onClick={handleClick}
    className="">
        Click here
    </button>

    <p>
        the count is {count}
    </p>
    </>
}

