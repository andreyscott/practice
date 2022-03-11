import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faInstagram } from "@fortawesome/free-solid-svg-icons";
//import {faTwitter} from "@fortawesome/free-brands-svg-icons";


export default function App() {
  
  const [count, setCount] = useState('');

  return(
    <div>
      <h1>Count: {count}</h1> <div onClick={() => setCount(currentCount => currentCount +1)}>+</div>
      <button onClick={() => setCount(currentCount => currentCount -1)}>-</button>
      <a href="https://app.daily.dev/AndreyScott"><img src="https://api.daily.dev/devcards/9d330d22d197425cb2abff118b0f3f13.png?r=kxb" width="400" alt="Andrew Irorere's Dev Card"/></a>
      
      </div>

  )


}
