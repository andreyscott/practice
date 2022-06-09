import React, {useState, useEffect}  from 'react'
export const Counter = () => {
    const [count, setCount] = useState(2)

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
