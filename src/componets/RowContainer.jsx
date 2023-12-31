import React, { useEffect, useRef } from 'react'
import {motion} from "framer-motion"
import { MdShoppingBasket } from 'react-icons/md'
export default function RowContainer({flag,data,scrollValue}) {
    const rowContainer = useRef();
    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue;
    },[scrollValue])
  return (
    <>
    <div
    ref={rowContainer}
     className={`w-full my-12 flex scroll-smooth items-center gap-3 ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"
    }`}>
        {data && data.length >0 ?( data.map((item)=>(
               <div key={item?.id} 
               className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]
                 bg-cardOverlay rounded-lg my-12 backdrop-blur-lg hover:drop-shadow-lg
               flex flex-col items-center justify-between gap-2 p-6">
               <div className="w-full flex items-center justify-between">
                   
                   <motion.div 
                   className='w-40 h-40 -mt-8 drop-shadow-2xl'
                   whileHover={{scale:1.2}}>
                   <img 
                    src={item?.imageURL}
                    className='w-full h-full object-contain' 
                    />
                   </motion.div>
                   


                   <motion.div 
                   whileTap={{scale:0.75}}
                    className="w-8 h-8 rounded-full bg-red-600 flex items-center
                   justify-center cursor-pointer hover:shadow-md">
                       <MdShoppingBasket className='text-whte'/>
                   </motion.div>
               </div>
   
               <div className="w-full flex flex-col items-end justify-end">
                   <p className="text-base md:text-lg text-textColor font-semibold">
                   {item?.title}
                   </p>
                   <p className="mt-1 text-sm text-gray-500">
                       {item?.calories} Calories
                   </p>
                   <div className="flex items-center gap-8">
                       <p className="text-lg text-headingColor font-semibold">
                           <span className="text-sm text-red-500">₹</span>
                           {item?.price}
                       </p>
                   </div>
               </div>
           </div>
        ))):(
            <div className="w-full flex flex-col items-center justify-center">
                <img src="/assets/NotFound.svg" alt="NotFound" className='h-340'/>
                <p className="text-xl text-headingColor font-semibold">
                    Items Not Available
                </p>
            </div>
        )
    }
    </div>
    </>
  )
}
