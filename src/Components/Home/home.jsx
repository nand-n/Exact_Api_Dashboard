import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import firstImg from '../../assets/Agri-Connect/FirstLogo.png'
import logoXl from '../../assets/Agri-Connect/Logo-xl.png'
import logoApp from '../../assets/Agri-Connect/Agri-connectApp.png'
import appleLogo from '../../assets/Agri-Connect/appleIcn.png'
import playstoreLogo from '../../assets/Agri-Connect/playstoreIcn.png'
import computer from '../../assets/Agri-Connect/computer.png'
import cloudUP from '../../assets/Agri-Connect/cloudup.png'
import farmfild from '../../assets/Agri-Connect/FarmField.png'
import dataDrivenAgriculture from '../../assets/Agri-Connect/DataDrivenAgriculture.png'
import cloudIcn from '../../assets/Agri-Connect/cloudicn.png'
import userIcn from '../../assets/Agri-Connect/usericn.png'
import dangerIcn from '../../assets/Agri-Connect/dangericn.png'
import thunderIcn from '../../assets/Agri-Connect/thundericn.png'
import soillMachine from '../../assets/Agri-Connect/Soil.png'
import soillDevice from '../../assets/Agri-Connect/soil-device.png'
import appBg from '../../assets/Agri-Connect/Union.png'
import appHome from '../../assets/Agri-Connect/appHome.png'

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
    <div className='max-w-screen mx-auto mr-0' >
      <section className='mt-[80px]'>
        <div className=" ">
          <div className={` `} >

            <img className='w-screen h-full' src={ firstImg} alt="" />
            <div className="absolute top-[200px] left-[142px] ">
                <h1 className=' text-[#FFC700] text-[56px] font-serif font-bold' >
              The Future of Agriculture
            </h1>
              <div className="flex">
                <h1 className='text-white text-[56px] font-serif font-bold' >
              Is Now.
              </h1>
              <h1 className='text-[#FFC700] text-[56px] font-serif font-bold'>Agri-Connect.</h1>
            </div>
              <p className=' text-[#ffffff] text-[24px] text-bold max-w-3xl font-bold mt-5'> Data Driven Agriculture For A better Productivity </p>
              <p className='text-[#ffffff] text-[16px] max-w-[638px] mt-1'> Data Driven Agriculture is the best way of Agriculture that makes the Agriculturemore productive that makes us rich and another shit  </p>
             
              <div className='mt-[60px] '>
              <Link to={ '/signin'} className='bg-[#ffffff] border-b-4 shadow text-[#022e0b] font-bold hover:bg-[#022e0b] hover:shadow-2xl hover:text-white hover:font-bold px-[35px] py-5 rounded-full'>Get Started</Link>
              </div>  
              
            </div>
            
          </div>
          <div className="w-[598px] h-[598px] absolute top-[90px] left-[740px] ">
                <img src={logoXl} alt="logoxl" className=' w-fit h-fit'/>
              </div>
          </div>
        </section>
        <section id="about-us" className="w-screen mt-[96px] h-[262px] bg-gray-200">
        <div className="flex justify-between pt-[72px] pb-[68px] px-[200px]">
          <div className="relative items-center">
            <p className='text-[#265A1F] max-w-[200px] text-center text-[58px]'>150,000</p>
            <p className='text-[#265A1F] max-w-[158px] text-center text-[19px]'>Farmers Joined And Impacted</p>
          </div>
          <div className="items-center">
            <p className='text-[#265A1F] max-w-[200px] text-[58px]'>87,000</p>
            <p className='text-[#265A1F] max-w-[158px] text-[19px]'>AGRO-BUSINESSES
HELPED</p>
          </div>
          <div className="">
            <p className='text-[#265A1F] max-w-[200px] text-[58px]'>790+</p>
            <p className='text-[#265A1F] max-w-[158px] text-[19px]'>AGRICULTURAL
COMMUNITY CREATED</p>
          </div>
          <div className="">
            <p className='text-[#265A1F] max-w-[200px] text-[58px]'>29%</p>
            <p className='text-[#265A1F] max-w-[158px] text-[18px]'>AVERAGE ANNUAL INCREASE
IN FARMER’S INCOME</p>
          </div>
        </div>
      </section>
      <section className='flex justify-center space-x-[50px] mt-[99px]' >
        <div className="bg-[#F4F4F4] w-[525px] h-[385px] rounded-xl pt-[37px] pl-[87px]">
          <img src={computer} alt="computer" />
          <h1 className='text-[#01312C] text-[18px] font-medium mt-[33.5px] '> Agri-Connect is a data managment ecosystem</h1>
          <p className='w-[394px] text-[#01312C] text-[15px] mt-2'> Farm Planning, Budgeting, Track and Manage Product Inputs, Job Management, Compliance, Agronomy, Logistics & Grower Services, Precision.</p>
        </div>
        <div className="bg-[#F4F4F4] w-[525px] h-[385px] rounded-xl  pt-[21px] pl-[87px]">
          <img src={cloudUP} alt="cloud" />
          <h1 className='text-[#01312C] text-[18px] font-medium mt-[33.5px]'> Agri-Connect is used by:</h1>
          <p className='w-[394px] text-[#01312C] text-[15px] mt-2'> Growers, Agronomists, Retailers, Application Contractors, Soil Samplers, anyone providing a service to crop growers.</p>
        </div>
      </section>
      <section className='mt-[99px] max-w-screen h-[513px]'>
           <img src={ farmfild} className='w-screen h-[513px]' alt="farm"/>
      </section>
      <section className='flex justify-center space-x-[41px] mt-[99px] max-w-screen'>
        <div className="items-start max-w-[442px] h-[291px] ">
          <h1 className='text-[25px] w-[440px]'>Mange Your Data </h1>
          <h2 className='text-[12px]'>The Agworld ecosystem allows you to collect data at every level of your operation and share this data with everyone that matters to you. Growers, farm hands, agronomists, input providers, contractors, banks, accountants, land owners and many other stakeholders are now able to work together on the same set of data.</h2>
          <div className="flex justify-start gap-x-3 mt-5">
            <img src={cloudIcn} className="w-fit h-fit"  alt="" />
            <div className="felx justify-start space-x-2 ">
              <h1>Collect and access your Data easily.</h1>
              <h2>Your farm data is stored in the cloud, which allows you access from any computer or iPad/iPhone.</h2>
            </div>
          </div>
          <div className="flex justify-start gap-x-3 mt-5">
            <img src={userIcn} className="w-fit h-fit"  alt="" />
            <div className="felx justify-start space-x-2 ">
              <h1>Share your data with others.</h1>
              <h2>Set up your team with personalised accounts to ensure everyone can see only what they need to get their job done.</h2>
            </div>
          </div>
        </div>
        <div className="">
          <img src={ dataDrivenAgriculture} alt="dataDrivenAgriculture"/>
        </div>


      </section>
       <section className='flex justify-center space-x-[41px] mt-[99px] max-w-screen'>
        <div className="">
          <img src={ soillMachine} alt="dataDrivenAgriculture"/>
        </div>
        <div className="items-start max-w-[442px] h-[291px] ">
          <h1 className='text-[25px] w-[440px]'>How Does Agri-Connect help on the farm</h1>
          <h2 className='text-[12px]'>Agri-Connect has a unique structured data system which means that you can take all your historical farm records and data shared from advisors, and turn them into unparalleled insights for more profitable decisions.</h2>
          <div className="flex justify-start gap-x-3 mt-5">
            <img src={thunderIcn} className="w-fit h-fit"  alt="" />
            <div className="felx justify-start space-x-2 ">
              <h1>Get information fast.</h1>
              <h2>Agri-Connect has been designed to keep you and your advisors on the same page, everyone can see any updates or changes in real time.</h2>
            </div>
          </div>
          <div className="flex justify-start gap-x-3 mt-5">
            <img src={dangerIcn} className="w-fit h-fit"  alt="" />
            <div className="felx justify-start space-x-2 ">
              <h1>Reduce erros.</h1>
              <h2>Agri-Connect gives you clarity on your agronomic and financial plan for the season with all your product, operational and financial requirements included in an easy to understand format..</h2>
            </div>
          </div>
        </div>
      


      </section>
      {/* <section className='mt-[99px] -z-10'>
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
        {/* <section id="about-us" className="py-16 flex justify-center mt-[99px]">
        <div className=" relative bg-gradient-to-r from-white to-white shadow border-2 rounded-3xl" style={{width: 1314, height: 717,}}>
          <div className="mt-10 ml-10">
          <img src={ourStoryLogo} alt="ourStoryLogo" className='mt-10' />
          <p className='max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto ipsa ex, facilis quae obcaecati qui doloribus reprehenderit tempora fugit? Cupiditate, accusamus. Ex dignissimos provident ea adipisci facilis velit odio?</p>
          <p className='max-w-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto ipsa ex, facilis quae obcaecati qui doloribus reprehenderit tempora fugit? Cupiditate, accusamus. Ex dignissimos provident ea adipisci facilis velit odio?</p>
          <p className='max-w-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto ipsa ex, facilis quae obcaecati qui doloribus reprehenderit tempora fugit? Cupiditate, accusamus. Ex dignissimos provident ea adipisci facilis velit odio?</p>
          </div>
      </div>
      </section> */}

      <section className='flex justify-center mt-[99px]'>
        <div className="relative">
          
            <img src={ourServices} className="" alt="ourServices" />
            <h1 className='absolute top-[272px] left-[83.26px] right-[83px] text-center text-[30px] font-extrabold text-white'>
            Modern farm management software that works where you do
            </h1>
        </div>
      </section>
      <section className='pt-[99px] w-screen h-[149px] flex justify-center gap-4 mb-4'>
        <button className='text-white rounded-xl hover:bg-green-800 p-[16px] bg-green-500'>
            Agri-Connect Basics
        </button>
         <button className='text-white rounded-xl hover:bg-green-800 p-[16px] bg-green-500'>
            Wither & Climate 
        </button>
         <button className='text-white rounded-xl hover:bg-green-800 p-[16px] bg-green-500'>
           Soil Info
        </button>
         <button className='text-white rounded-xl hover:bg-green-800 p-[16px] bg-green-500'>
           Disease Detection 
        </button>
         <button className='text-white rounded-xl hover:bg-green-800 p-[16px] bg-green-500'>
          Farm Management
        </button>
         <button className='text-white rounded-xl hover:bg-green-800 p-[16px] bg-green-500'>
            Market Data
        </button>
        
      </section>

           <section className='flex justify-center space-x-[41px] mt-[99px] max-w-screen'>
        <div className="items-start max-w-[442px] h-[291px] ">
          <h1 className='text-[25px] w-[440px]'>Mange Your Data </h1>
          <h2 className='text-[12px]'>The Agworld ecosystem allows you to collect data at every level of your operation and share this data with everyone that matters to you. Growers, farm hands, agronomists, input providers, contractors, banks, accountants, land owners and many other stakeholders are now able to work together on the same set of data.</h2>
          <div className="flex justify-start gap-x-3 mt-5">
            <img src={cloudIcn} className="w-fit h-fit"  alt="" />
            <div className="felx justify-start space-x-2 ">
              <h1>Collect and access your Data easily.</h1>
              <h2>Your farm data is stored in the cloud, which allows you access from any computer or iPad/iPhone.</h2>
            </div>
          </div>
          <div className="flex justify-start gap-x-3 mt-5">
            <img src={userIcn} className="w-fit h-fit"  alt="" />
            <div className="felx justify-start space-x-2 ">
              <h1>Share your data with others.</h1>
              <h2>Set up your team with personalised accounts to ensure everyone can see only what they need to get their job done.</h2>
            </div>
          </div>
           <div className="flex justify-start gap-x-3 mt-5">
            <img src={userIcn} className="w-fit h-fit"  alt="" />
            <div className="felx justify-start space-x-2 ">
              <h1>Share your data with others.</h1>
              <h2>Set up your team with personalised accounts to ensure everyone can see only what they need to get their job done.</h2>
            </div>
          </div>
          <button className='mt-[20px] px-[16px] py-3 border-2 border-[#01312C]   text-[#01312C] hover:bg-[#01312C] rounded-lg hover:text-white  '> Read More </button>
        </div>
        <div className="">
          <img src={ soillDevice} alt="dataDrivenAgriculture"/>
        </div>


      </section>
      <section className='w-full h-[353px] mt-[99px] bg-[#266937]'>
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
      <section className='mt-[10px] mb-5 flex justify-center'>
        <img src={appBg} alt="appBg" className='absolute z-0' />
        <div className="bg-white  z-40">
        <img src={appHome} alt="" className=' w-auto h-auto'/>
        </div>
        <div className='w-[529px] ml-[193px] h-[328px]'>
          <div className="mt-[197px]  flex justify-center">
            <img src={logoApp} className='w-full h-full' alt="logoSmallApp" />
          </div>
            <div className="w-[500px] ml-5">
               Agri-Connect's easy to use apps put all the important information at your fingertips and work seamlessly, even when you don't have an internet connection. It's no wonder they've become the most rated farm management apps on the iTunes App store!
          </div>
          
          <div className="flex justify-center mt-5 ">
            <button className="m-5 p-5 w-auto flex justify-center text-[25px] font-bold border-2 border-[#01312C]   text-[#01312C] hover:bg-[#01312C] rounded-lg hover:text-white">
              <img src={appleLogo} className='w-auto' alt="play" />
              App Store
            </button>
            <button className=" p-5 m-5 w-auto flex justify-center text-[25px] font-bold border-2 border-[#01312C]   text-[#01312C] hover:bg-[#01312C] rounded-lg hover:text-white">
              <img src={playstoreLogo} className='w-auto' alt="play" />
              Play Store
            </button>
          </div>
        </div>

      </section>
      
      {/* <section className='w-screen h-[517px] bg-black'></section> */}
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