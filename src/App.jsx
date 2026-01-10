import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Module1 from './pages/modules/module1';

function App() {
  return (
    <Router basename="/docker-course-react-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module1" element={<Module1 />} />
      </Routes>
    </Router>
  )
}

export default App
