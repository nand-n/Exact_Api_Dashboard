import React from 'react'
const contents = [
    {
        Home: { title: "HOME", id: "home" },
        About:{ title:"HOME",id:"home"},
        Contact:{ title:"HOME",id:"home"},
        Body:{ title:"HOME",id:"home"},
        
    }

]


const Navigationbar=() => {
  return (
      <div className='w-full flex py-6 justify-between items-center navbar'>
          <div className='flex'>
          <h1 className='text-yellow'>Dolche</h1>
          <h1 className='text-gray'>Bank</h1>
          </div>          
          

    </div>
  )
}

export default Navigationbar