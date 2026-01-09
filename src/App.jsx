import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
	<div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Привет, мир!</h1>
      <p>Это моё первое приложение на React 2026</p>
      <button onClick={() => alert("Тык!")}>
        Нажми меня 😄
      </button>
    </div>
  )
}

export default App
