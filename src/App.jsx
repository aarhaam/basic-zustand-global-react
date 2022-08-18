import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useBearStore } from './store/bear-store'

function App() {
  const [count, setCount] = useState(0)

  const bears = useBearStore((state) => state.bears)

  const addBears = useBearStore((state) => state.increasePopulation)

  const killBears = useBearStore((state) => state.removeAllBears)

  return (
    <div className="App">
        <p>
          {bears}
        </p>
        <button onClick={addBears}>
            add bears
        </button>

        <button onClick={killBears}>
            Kill all bears
        </button>
    </div>
  )
}

export default App
