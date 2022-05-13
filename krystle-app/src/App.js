import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components.js/Home'
import About from './components.js/About'
import Projects from './components.js/Projects'
import Contact from './components.js/Contact'
import NavBar from './components.js/NavBar'


function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
  )
}

export default App
