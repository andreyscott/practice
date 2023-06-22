import React, {useState, }  from 'react'
export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
  return (
      <div style={{ display: 'flex'}}>
      <button onClick={increment}
      >+</button>
    <p >{count}</p>
    <button onClick={decrement}>-</button>

      </div>
  )


 
}
