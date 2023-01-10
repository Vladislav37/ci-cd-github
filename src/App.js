import {useState, useCallback} from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handlerButton = useCallback(() => setCount(prev => prev+1), [])
  return (
    <div className="App">
      <div>
        <span>{count}</span>
        <button
          style={{background: 'blue', color: "white", padding: 15}}
          onClick={handlerButton}>
            increment
          </button>
      </div>
    </div>
  );
}

export default App;
