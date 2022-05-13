
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Home from './components.js/Home'
import About from './components.js/About'
import Navbar from './components.js/NavBar'

function App() {
  return (
    <div className="App">
   <Router>
    <Navbar />
      <Routes>

      <Route path="/" element ={<Home />} />
      <Route path = "/about" element={<About/>} />

    </Routes>

   </Router>
      <h1 class="font-bold underline"> 
        Krystle Mitchell Portfolio</h1>
        {/* <Link to="about">My Profile</Link> */}
    
    </div>
   
     

   
   
    

   
   
       
   )    
    
  
}

export default App;
