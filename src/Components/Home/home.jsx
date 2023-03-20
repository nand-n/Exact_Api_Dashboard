import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import firstImg from './Firstimg.png'
import ourStoryLogo from './assets/ourStoryLogo.png'
import ourServices from './assets/ourServicesImg.png'
import climate from './assets/climate.png'
import soill from './assets/soill.png'
import disease from './assets/disease.png'
import marketData from './assets/marketData.png'
import arrowBack from './assets/Arrowback.png'
import arrowRight from './assets/Arrowrghtight.png'
import prodcut1 from './assets/product/prodcut1.png'
import prodcut2 from './assets/product/product2.png'
import prodcut3 from './assets/product/product3.png'



function Home() {

  const handleGetStarted = () => {
    
  }

  return (
    <div>
      <section className='py-16'>
        <div className="container mx-auto my-10">
          <div className={` `} >

            <img className='absolute top-20 left-0 right-0 w-screen h-full' src={ firstImg} alt="" />
            <div className="absolute top-80 left-50 bottom-50 w-full h-full">
                <h1 className='text-[#266937] text-[56px] font-serif font-bold' >
              The Future of Agriculture
            </h1>
            <h1 className='text-[#242535] text-[56px] font-serif font-bold' >
              Is Now.
              </h1>
              <p className='text-[#01312C] text-[24px] font-semibold mt-5'> Data Driven Agriculture For A better Productivity </p>
              <p className='text-[#01312C] text-[18px]  max-w-lg'> Data Driven Agriculture is the best way of Agriculture that makes the Agriculturemore productive that makes us rich and another shit  </p>
             
              <div className='mt-20 '>
              <Link to={ '/signin'} className='bg-[#266937] text-white hover:bg-[#022e0b] p-5 rounded-lg'>Get Started</Link>
              </div>  
            </div>
            
          </div>
          </div>
        </section>
        {/* <section id="about-us" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
            fermentum lorem. Praesent consequat ante ut nunc hendrerit, nec
            efficitur sapien ultricies. Sed in bibendum purus. Fusce commodo
            ligula vel nisl bibendum sollicitudin.
          </p>
          <div className="flex flex-wrap">
           
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
                fermentum lorem. Praesent consequat ante ut nunc hendrerit, nec
                efficitur sapien ultricies.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Sed in bibendum purus. Fusce commodo ligula vel nisl bibendum
                sollicitudin. Nulla quis consequat mi. Sed eget risus non nisl
                bibendum efficitur.
              </p>
              <p className="text-lg text-gray-700">
                Aliquam et faucibus ipsum, sit amet suscipit massa. Nulla
                facilisi. Phasellus blandit risus at feugiat bibendum. Sed
                efficitur ut dolor sed facilisis.
              </p>
            </div>
             <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                className="rounded-lg shadow-lg h-auto"
                src="https://via.placeholder.com/500x400"
                alt="About Us Image"
              />
            </div>
          </div>
        </div>
      </section> */}
        <section id="about-us" className="py-16 flex justify-center mt-[700px]">
        <div className=" relative bg-gradient-to-r from-white to-white shadow border-2 rounded-3xl" style={{width: 1314, height: 717,}}>
          <div className="mt-10 ml-10">
          <img src={ourStoryLogo} alt="ourStoryLogo" className='mt-10' />
          <p className='max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto ipsa ex, facilis quae obcaecati qui doloribus reprehenderit tempora fugit? Cupiditate, accusamus. Ex dignissimos provident ea adipisci facilis velit odio?</p>
          <p className='max-w-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto ipsa ex, facilis quae obcaecati qui doloribus reprehenderit tempora fugit? Cupiditate, accusamus. Ex dignissimos provident ea adipisci facilis velit odio?</p>
          <p className='max-w-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto ipsa ex, facilis quae obcaecati qui doloribus reprehenderit tempora fugit? Cupiditate, accusamus. Ex dignissimos provident ea adipisci facilis velit odio?</p>
          </div>
      </div>
      </section>

      <section className='py-16 '>
        <div className='flex justify-center'>
          <img src={ourServices} alt="ourServices" />
        </div>
        <div className="flex justify-between pt-[160px] pl-[200px]">
          <div className="flex">
            <img src={climate} alt="climate" />
            <div className='ml-5'>
              <p className='font-bold text-[22px] '>Weather & Climate</p>
              <p className='w-[219px]'>Data Driven and Ai based Weather and Climate prediction to predict upcoming Diseases ,  </p>
            </div>
          </div>
          <div className="flex">
            <img src={soill} alt="soil" />
            <div className='ml-5'>
              <p className='font-bold text-[22px] '>Soil Info</p>
              <p className='w-[219px]'>Data Driven and Ai based Weather and Climate prediction to predict upcoming Diseases ,  </p>
            </div>

          </div>

        </div>
        <div className="flex justify-between pt-[73px] pl-[200px]  " >
          <div className="flex">
            <img src={disease} alt="disease" />
            <div className='ml-5'>
              <p className='font-bold text-[22px] '>Weather & Climate</p>
              <p className='w-[219px]'>Data Driven and Ai based Weather and Climate prediction to predict upcoming Diseases ,  </p>
            </div>

          </div>
          <div className="flex">
            <img src={marketData} alt="marketData" />
            <div className='ml-5'>
              <p className='font-bold text-[22px] '>Weather & Climate</p>
              <p className='w-[219px]'>Data Driven and Ai based Weather and Climate prediction to predict upcoming Diseases ,  </p>
            </div>

          </div>
        </div>

      </section>

      <section className='w-full h-[353px] bg-[#266937]'>
        <div className='flex justify-center pt-[45px]'>
          <div>
            <p className=' text-[36px] text-[#FFFFFF]  font-serif-700  font-semibold'>
          Sign Up For Exclusive Offers, Care Tips, Newsletters And More!
            
          </p>
           <p className='flex justify-center text-[16px] text-[#FFFFFF]  font-serif-700 '>
          Sign u p to our newsletter to save 15% OFF your order!
            </p>
            <div className= 'flex justify-center pt-10 '>
              <div className="inline-flex space-x-1.5 items-start justify-start" style={{width: 736, height: 56,}}>
    <input className="flex-1 text-base font-medium text-white  h-full px-8 pt-4 pb-5 shadow border-2 rounded-2xl border-gray-50" placeholder="Name"></input>
    <div className="w-96 h-full shadow border-2 rounded-2xl border-gray-50">
        <input className="flex-1 text-base font-medium text-white h-full px-8 pt-4 pb-5 rounded" placeholder="Email address"></input>
    </div>
    <div className="flex items-center justify-center w-44 h-full px-3 py-2.5 bg-white shadow rounded-2xl">
        <p className="text-sm font-bold leading-7 text-center text-green-800">Subscribe</p>
    </div>
</div>
            </div>
          </div>
        
        </div>
      </section>
      <section className='w-full h-[670px] py-[49px] px-[207]'>
        <div className="flex justify-center">
          <h1 className='text-[36px] font-bold text-[#003D38]'>Products</h1>
         
        </div>
        <div className='flex justify-center'>
          <h3 className='text-[18px]  w-[672px] text-[#003D38]'>
            Egestas nulla dis posuere purus neque. Dolor urna et sed in et, quam. Varius lacinia est nunc, gravida proin eu dignissim massa. Nibh ultricies lacus quam potenti.
          </h3>
        </div>
        <div className="flex justify-center">
          <button className="">
            <img src={ arrowBack } alt="" />
          </button>
          <div className="flex  mt-5">
            <div className=" ml-[20px] rounded-lg shadow-lg shadow-purple-300 w-[263px] h-[310px]">
              <img className='p-[35px]' src={prodcut1} alt="" />
              <p className='text-[16px] text-[#01312C] font-semibold flex justify-center'>HD3000 Battery Powered</p>
              <p>Duis vulputate amet ante vulputate. Fames nulla.</p>

            </div>
            <div className="rounded-lg shadow-lg shadow-purple-300 w-[263px] h-[310px]  ml-[20px]">
              <img className='p-[35px] ' src={prodcut2} alt="" />
              <p className='text-[16px] text-[#01312C] font-semibold flex justify-center'>HD3000 Battery Powered</p>
              <p className='flex justify-center w-[219px]'>Duis vulputate amet ante vulputate. Fames nulla .</p>

            </div>
             <div className="rounded-lg shadow-lg shadow-purple-300 w-[263px] h-[310px]  ml-[20px]">
              <img className='p-[35px] ' src={prodcut2} alt="" />
              <p className='text-[16px] text-[#01312C] font-semibold flex justify-center'>HD3000 Battery Powered</p>
              <p className='flex justify-center w-[219px]'>Duis vulputate amet ante vulputate. Fames commodo .</p>

              </div>
            
            <div className="rounded-lg shadow-lg shadow-purple-300 w-[263px] h-[310px] ml-[20px]  ">
              <img className='p-[35px] flex justify-center ' src={prodcut3} alt="" />
              <p className='text-[12px] text-[#01312C] font-semibold flex justify-center'>HD3000 Battery Powered</p>
              <p className=''>Duis vulputate amet ante vulputate. Fames nulla commodo</p>
              </div>

          </div>
          <button className="">
            <img src={arrowRight } alt="" />
          </button>
          
        </div>

        <div className='flex justify-center mt-[35px]'>
        <Link to={'/prodcuts'} className='bg-[#01312C] text-white p-[11px] rounded hover:bg-[#266937] '>View All Prodcuts</Link>
          
            </div>
      </section>
      
      <section className='w-screen h-[517px] bg-black'></section>
        {/* <section id="about-us" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
            fermentum lorem. Praesent consequat ante ut nunc hendrerit, nec
            efficitur sapien ultricies. Sed in bibendum purus. Fusce commodo
            ligula vel nisl bibendum sollicitudin.
          </p>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                className="rounded-lg shadow-lg h-auto"
                src="https://via.placeholder.com/500x400"
                alt="About Us Image"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
                fermentum lorem. Praesent consequat ante ut nunc hendrerit, nec
                efficitur sapien ultricies.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Sed in bibendum purus. Fusce commodo ligula vel nisl bibendum
                sollicitudin. Nulla quis consequat mi. Sed eget risus non nisl
                bibendum efficitur.
              </p>
              <p className="text-lg text-gray-700">
                Aliquam et faucibus ipsum, sit amet suscipit massa. Nulla
                facilisi. Phasellus blandit risus at feugiat bibendum. Sed
                efficitur ut dolor sed facilisis.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home