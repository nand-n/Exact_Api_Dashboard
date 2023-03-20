import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Account from './Components/Account/account'
import Climate from './Components/Climate/Wind/Wind'
// import Wind from './Components/Climate/Wind/Wind'
import Disease from './Components/Disease/disease'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import Home from './Components/Home/home';
// import Home from './Components/Home/home'
import MarketData from './Components/MarketData/marketData'
// import Services from './Components/Services/services'
import Soil from './Components/Soil/soil'
import Navbar from './Componentss/Navbar';
import Register from './Componentss/User/Register';
import SignIn from './Componentss/User/Signin';


function App() {

  return (
    <>
       <div className='' >
        <Header />
        {/* <Navbar /> */}
      <main>
            <Routes >
        <Route path='/' element={<Home />} />
            <Route path='/account' element={<Account />} />
            <Route path='/climate' element={<Climate />} />
        <Route path='/soil' element={<Soil />} />
        <Route path='/disease' element={<Disease />} />
              <Route path='/marketData' element={<MarketData />} />
            <Route path='/signin' element={<SignIn />} />
              <Route path='/register' element={<Register />} />
            
              
              
              </Routes>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default App
