import React from 'react'
export default function Home() {
  const HeroData = [
    {id:1, name:"IceCream", desc:"Chocolate & vanilla", price:"125",img:"/assets/i1.png"},
    {id:2, name:"strawberries", desc:"Fresh Strawberries", price:"265",img:"/assets/f1.png"},
    {id:3, name:"chiken kebab", desc:"Mixed kebab plate", price:"135",img:"/assets/c3.png"},
    {id:4, name:"Fish Kebab", desc:"Mixed Fish Kebab", price:"225",img:"/assets/fi1.png"}
]
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id='Home'>
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className="flex items-center gap-2 justify-center  bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src="/assets/delivery.png" 
            className='w-full h-full object-contain'/>
          </div>
        </div>

      <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'> Your City</span></p>
      <p className="text-base text-textColor text-left md:w-[80%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque error totam eum ex ipsum accusantium, optio facere perferendis consectetur quam impedit corrupti non nulla voluptates hic placeat delectus, dolore vitae.
      </p>
      <button type='button' 
      className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out md:w-auto'>Order Now</button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src="/assets/heroBg.png" className='ml-auto h-420 w-full lg:w-auto lg:h-650'/>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
        {HeroData && HeroData.map((item)=>(
          <div className="lg:w-190  p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg" key={item.id}>
            <img src={item.img} className=' w-20 lg:w-40 -mt-10 lg:-mt-20'/>
            <p className='text-base lg:text-xl font-semibold text-textColor lg:mt-4 mt-2'>
              {item.name}
            </p>
            <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold lg:my-3 my-1'>
              {item.desc}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">₹  </span>{item.price}</p>
          </div>
      ))}
          
        </div>
      </div>
    </section>
  )
}
