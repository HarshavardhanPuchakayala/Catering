import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import {RiRefreshFill} from "react-icons/ri"
import {BiMinus} from "react-icons.bi"
import {motion} from "framer-motion"
export default function Cart() {
  return (
    <>
    <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white 
    drop-shadow-md flex flex-col z-[101]">
        <div className="w-full flex items-center justify-between p-4 cursor-pointer">
            <motion.div
            whileTap={{scale: 0.75}}>
                <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
            </motion.div>
            <p className="text-textcolor text-lg font-semibold"> cart</p>
        <motion.p
        whileTap={{scale:0.75}}
        className='flex items-center gap-2 p-1 px-2 my-2
        bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base'>
            clear <RiRefreshFill/>{""}

        </motion.p>
        </div>

        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">

                <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                    <img src="" alt="" 
                    className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>

                    <div className="flex flex-col gap-2">
                        <p className="text-base text-gray-50">
                            chocolate vanilla
                        </p>
                        <p className="text-sm block text-gray-300 font-semibold">
                            50
                        </p>
                    </div>

                    <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                        <motion.div
                        whileTap={{scale:0.75}}>
                            <BIminus className="text-gray-50"/>
                        </motion.div>

                        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                            1
                        </p>
                        <motion.div
                        whileTap={{scale:0.75}}>
                            <Biplus className="text-gray-50"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
