import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Setting from './Components/Setting';
import Register from './Components/User/Register';
import Signin from './Components/User/Signin';

function App() {

  return (
    <div className="bg-[#021C34]  ">
      <Router>
          <Navbar />

      <Routes>    
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />   
          <Route path="/settings" element={<Setting />} />   
          <Route path="/signin" element={<Signin />} />  
        <Route path="/register" element={<Register />} />   
          
        </Routes>
      <Footer />
        
      </Router>
    </div>
  )
}

export default App
