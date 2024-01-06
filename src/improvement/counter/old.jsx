import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        // state updates arn't imedaite 


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

