import React, {useState, useEffect} from 'react';
import axios from 'axios';

const fetchUserData = async () => {
  return await axios.get('https://randomuser.me/api/')
  .then(({data}) => {
    console.log(data)
   return JSON.stringify(data)
  })
  .catch(err => {
    console.error(err)
  })
}

export default function App() {
  const [randomData, setrandomData] = useState('')

  useEffect( () => {
    fetchUserData().then(randomData => {
      setrandomData(randomData || 'pls work')
    })
   }, [])

  return <div>
    {randomData}
  </div>;
}