import { CreditCardIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import creditCard from '../assets/CreditCard.png'
import appstore from '../assets/appstore.png'
import playstore from '../assets/playstore.png'

// import credit from '../assets/'

function Homepage() {
  const [name, setName] = useState('')
  // const renderCount = useRef(0)
  
  const handleClick = () => {
    
  }

  useEffect(() => {
  },[])
  return (
    <div className='scrollbar-hide'>
      <div className=' min-w-[200px] pt-2 pl-2  max-w-screen scrollbar-hide'>
      <div className='grid grid-flow-col mt-2 justify-between scrollbar-hide'>
        <div className='mt-3 p-5  scrollbar-hide'>
        <h1 className='  text-white font-sans font-bold text-5xl ml-20'>Welcome to Exact Tip</h1> 
        <h1 className='mt-5  text-[#5CE1E6] font-sans font-bold text-3xl ml-20'>The Best Tiping Platform</h1> 
        <h1 className='mt-5  text-white font-sans font-bold text-2xl ml-20'>Enjoy The tips by getting the best expriance </h1> 
            <div className='ml-20 mt-10 text-white font-sans '>
              <p className='text-sm w-[525px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nobis esse, nihil quo ducimus sed suscipit velit qui maiores expedita ut reprehenderit asperiores eveniet veniam aut eum quis cumque culpa?</p>
          </div>
            <div className='mt-40'>
            <Link to='/signin' className='text-black font-bold ml-20 shadow-md rounded-lg p-3 hover:bg-[#034c4e] hover:text-white mt-40 bg-[#5CE1E6]' >Get Started</Link>
          </div>        
        </div>
        <img className='' width={"800px"} src={creditCard} alt="aaa"/>
      </div>     
      </div>
      <div className='mt-5 ml-20 grid grid-flow-col'>
        <div className=''>
           <p className='text-white font-sans text-4xl font-bold'>You do The Business ,</p>
          <p className='text-white font-sans text-4xl font-bold'>We'll handle the Money</p>
         </div>
        <div className='row'>
          <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {/* <img className="h-48 w-full object-cover md:w-48" src={credit} alt="card image"/> */}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Easily Controll your</div>
          <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Your Billing & Envoices</div>
         
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='flex flex-2 mt-2 justify-evenly'>
                  <img width={"100px"} src={playstore}  />
                  <img width={"100px"} src={appstore}  />

              </div>
              </div>
      </div>
          </div>
          <div className="mt-5 rounded-lg overflow-hidden shadow-md p-4 w-80 bg-yellow-500">
      <div className="flex justify-end ">
            {/* <h1 >Dolche Card</h1> */}
        
              <img
          src="https://img.icons8.com/color/48/000000/visa.png"
          alt="visa"
        />
      </div>
      <div className="mt-4">
        <div className="text-sm font-medium text-gray-800">Card number</div>
        <div className="text-lg font-medium text-gray-800">
          **** **** **** 1234
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <div className="text-sm font-medium text-gray-800">Cardholder</div>
          <div className="text-lg font-medium text-gray-800">John Doe</div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-800">Expires</div>
          <div className="text-lg font-medium text-gray-800">12/24</div>
        </div>
      </div>
    </div>

        </div>
      </div>
    </div>
  )
}

export default Homepage;