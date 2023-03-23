import { BrowserRouter ,  Route, Routes  } from 'react-router-dom';
import Account from './Components/Account/account'
import Climate from './Components/Climate/Wind/Wind'
import ClimateWindy from './Components/Climate/Wind/Windy';
import Disease from './Components/Disease/disease'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import Nav from './Components/Header/Nav';
import Home from './Components/Home/home';
import MarketData from './Components/MarketData/marketData'
import Soil from './Components/Soil/soil'
import Navbar from './Componentss/Navbar';
import Register from './Componentss/User/Register';
import SignIn from './Componentss/User/Signin';


function App() {

  return (
    <>
      <BrowserRouter>
       <div className='overflow-hidden'>
        <Header />
        {/* <Nav /> */}
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
            <Route path='/climate-winy' element={<ClimateWindy />} />
          </Routes>
        </main>
      </div>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
