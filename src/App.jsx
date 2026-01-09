import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Module1 from './pages/modules/module1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div style={{ padding: "50px" }}>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module1" element={<Module1 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
