
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Home from './components.js/Home'
import About from './components.js/About'
import Projects from './components.js/Projects'
import Contact from './components.js/Contact';
import NavBar from './components.js/NavBar';

function App() {
  return (
    <BrowserRouter>
 
      {/* <h1 class="font-bold underline"> 
        Krystle Mitchell Portfolio</h1> */}
    <NavBar />
      <Routes>

      <Route to='/' element={<Home />} />
      <Route to='/about' element={<About />} />
      <Route to='/contact' element={<Contact />} />
      <Route to='/projects' element={<Projects />} />
    

    </Routes>

  
     
    
    </BrowserRouter>
   
     

   
   
    

   
   
       
   )    
    
  
}

export default App;
