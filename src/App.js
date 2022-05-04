import React, {useEffect, useState} from 'react'
// import user form jsonplaceholder/users using axios now display it in the app
// import axios from 'axios'
import Test from './apis/test'
import { Counter } from './counter/Counter'

//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



export default function App() {
  // const [users, setUsers] = useState([])
 
  // const fetchData = async () => {
  // return await axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(({data}) => {
  //       console.log(data)
  //       return JSON.stringify(data)
  //     }).catch(err => {
  //       console.log(err)
  //     }
  //     )
  // }

  // useEffect(() => {
  //   fetchData().then(users => {
  //     setUsers(users || 'pls work now')
  //   })
  
  
  // }, [])
  


  return (
    <div>
    <Counter />
     {/* {users} */}
     <Test />
    {/* {users.map(user => <h1>{user.name}</h1>)} */}
    </div>
  )
}
