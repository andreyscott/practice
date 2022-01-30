import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

//create a counter with useState
//create a function that increments the counter
//create a function that decrements the counter
// import the api from the url https://randomuser.me/api/ using a functional component called made

const fecthRandomData = async () => {
  try {
   const resp = await axios.get('https://randomuser.me/api/');
   //display the data on the screen
   JSON.stringify(resp.data.results[0].name.first);

 } catch (err) {
   console.log(err);
 }
}

export default function App() {
  // create a useffect hook that runs the fecthRandomData function  when the component loads
 
 const [randomData, setRandomData] = useState('');

  useEffect(() => { 
   fecthRandomData().then((randomData) => {
      setRandomData(randomData);
   });

  }, []);

    return(
      <div> 
       <div>
         {
            randomData
         }
       </div>
    </div>
    )
}



