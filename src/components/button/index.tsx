import React, { useCallback, useState } from 'react'

export const Button = () => {
  const [count, setCount] = useState(0)
  const handlerButton = useCallback(() => setCount(prev => prev+1), [])

  return (
    <div>
      <span>{count}</span>
      <button onClick={handlerButton}></button>
    </div>
  )
}
