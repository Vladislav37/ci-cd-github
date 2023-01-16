import { memo, useCallback, useState } from 'react'

export const Button = memo(() => {
  const [count, setCount] = useState(0)
  const handlerButton = useCallback(() => setCount(prev => prev+1), [])
  return (
    <div>
        <span>{count}</span>
        <button
          style={{background: 'blue', color: "white", padding: 15}}
          onClick={handlerButton}>
            increment
          </button>
      </div>)
})
