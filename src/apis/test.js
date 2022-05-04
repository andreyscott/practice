import React, {useState, useEffect}  from 'react'
import axios from 'axios'

function Test() {
    const [user, setUsers] = useState([])

    const fetchData = async () => {
        return await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
                console.log(data)
                return JSON.stringify(data) 
            }).catch(err => {
                console.log(err)
            }
            )

    }

    useEffect(() => {
        fetchData().then(user => {
            setUsers(user || 'pls work now')
            })
            }, [])
  return (
    <div>
 {user}
      
    </div>
  )
}

export default Test