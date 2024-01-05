import React,{useState, } from 'react';
import  axios  from 'axios';

function December () {
    const handledFetch = async () => {
        return  await axios.get('https://randomuser.me/api/').then(({data}) =>
        {
            console.log(data)
            return JSON.stringify(data)
        }).catch(
            err => {return console.error(err, 'this is an err')
        }
        )       

    }
    return(
        <div>
            <button onClick={handledFetch()}>Click here to requrest data</button>
            hello world
        </div>
    )
}

export default December;