import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import Homepage from './Components/Homepage';

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />        
      </Routes>
    </Router>
    </div>
  )
}

export default App
